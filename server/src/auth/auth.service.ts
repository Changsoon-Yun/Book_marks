import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { AuthCredentialDto } from "./dto/auth-credential.dto";

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signup(authCredentialDto: AuthCredentialDto) {
    // const { email, password } = authCredentialDto;
    const email = authCredentialDto.email;
    const password = authCredentialDto.password;
    try {
      const res = await this.prisma.user.create({ data: { email, password } });
      return res;
    } catch (err) {
      if (err.code === "P2002") {
        throw new ConflictException("Existing username");
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
