import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "@prisma/client";
import { PrismaService } from "../../prisma.service";

@Injectable()
export class LoginService {
  constructor(private jwtService: JwtService, private prisma: PrismaService) {}

  async login(body: Omit<User, "id" | "inserted_at">) {
    const { email, password } = body;

    const exist = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    console.log(exist);
    if (!exist) {
      throw new HttpException(
        "회원정보를 찾을 수 없습니다",
        HttpStatus.NOT_FOUND
      );
    }

    try {
    } catch (err) {
      throw new UnauthorizedException("인증되지 않은 사용자 입니다.");
    }
  }
}
