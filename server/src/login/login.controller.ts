import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { UserLoginDto } from './dto/UserLoginDto';
@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  login(@Body() body: UserLoginDto) {
    return this.loginService.login(body);
  }
}
