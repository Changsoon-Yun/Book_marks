import { Body, Controller, Post } from "@nestjs/common";
import { SigninService } from "./signin.service";
import { UserDto } from "../dto/UserDto";

@Controller("auth/signin")
export class SigninController {
  constructor(private readonly signinService: SigninService) {}

  @Post()
  async signin(@Body() body: UserDto) {
    return await this.signinService.signin(body);
  }
}
