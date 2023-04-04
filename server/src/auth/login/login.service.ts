import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "@prisma/client";

@Injectable()
export class LoginService {
  constructor(private jwtService: JwtService) {}

  login(body: Omit<User, "id" | "inserted_at">) {
    const { email, password } = body;
    if (email === "test@test.com" && password === "test") {
      const payload = { email, sub: "0" };
      const token = this.jwtService.sign(payload);
    }
    throw new UnauthorizedException("인증되지 않은 사용자 입니다.");
  }
}