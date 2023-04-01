import { Body, Controller, Get, Post } from "@nestjs/common";
import { LoginService } from "./login.service";
import { User } from "@prisma/client";

@Controller("login")
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  findAll(): string {
    return "this is action";
  }

  @Post()
  login(@Body() body: Omit<User, "id,inserted_at">) {
    return this.loginService.login(body);
  }
}
