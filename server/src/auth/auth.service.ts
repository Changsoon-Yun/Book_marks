import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { AuthCredentialDto } from "./dto/auth-credential.dto";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async getUser(userId: number) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (user) {
      const payload = { email: user.email };
      const accessToken = this.jwtService.sign(payload);

      return { accessToken: accessToken, id: user.id, email: user.email };
    }
  }

  async signup(authCredentialDto: AuthCredentialDto) {
    const { email, password } = authCredentialDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
      return await this.prisma.user.create({
        data: { email, password: hashedPassword },
      });
    } catch (err) {
      if (err.code === "P2002") {
        throw new ConflictException("Existing username");
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async login(authCredentialDto: AuthCredentialDto) {
    const { email, password } = authCredentialDto;
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (user && (await bcrypt.compare(password, user.password))) {
      //유저 토큰 생성(secret + payload)

      const payload = { email };
      const accessToken = this.jwtService.sign(payload);

      return { accessToken: accessToken, id: user.id, email: user.email };
    } else {
      throw new UnauthorizedException("Login Failed");
    }
  }
}
