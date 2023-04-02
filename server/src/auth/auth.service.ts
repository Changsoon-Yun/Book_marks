import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { AuthCredentialDto } from "./auth-credential.dto";

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signup(authCredentialDto: AuthCredentialDto) {
    // const { email, password } = authCredentialDto;
    const email = authCredentialDto.email;
    const password = authCredentialDto.password;
    const res = await this.prisma.user.create({ data: { email, password } });

    console.log(res);
    return res;
  }
}
