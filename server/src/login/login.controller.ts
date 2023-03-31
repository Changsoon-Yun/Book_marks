import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { UserLoginDto } from './dto/UserLoginDto';
@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  findAll(): string {
    return 'this is action';
  }

  @Post()
  login(@Body() body: UserLoginDto) {
    return this.loginService.login(body);
  }
}
