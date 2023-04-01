import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
} from "@nestjs/common";

import { PrismaService } from "../../prisma.service";
import { UserDto } from "../dto/UserDto";

@Injectable()
export class SigninService {
  constructor(private prisma: PrismaService) {}

  async checkUser(email: string) {
    console.log(email);
    return this.prisma.user.findUnique({
      where: { email: email },
    });
  }

  async signin(body: UserDto) {
    const { email, password } = body;

    const exist = await this.checkUser(email);
    if (exist) throw new HttpException("Conflict", HttpStatus.CONFLICT);

    try {
      return await this.prisma.user.create({
        data: {
          email,
          password,
        },
      });
    } catch (err) {
      return JSON.stringify(err);
    }
  }
}
