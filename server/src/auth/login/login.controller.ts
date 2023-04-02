import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { LoginService } from "./login.service";
import { User } from "@prisma/client";

@Controller("auth/login")
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @HttpCode(200)
  @Post()
  async login(@Body() body: Omit<User, "id,inserted_at">) {
    return await this.loginService.login(body);
  }
}
