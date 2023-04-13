import { Body, Controller, Get, HttpCode, Post, Res, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '@prisma/client';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { GetUser } from './get-user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('/get-user')
  @UseGuards(AuthGuard())
  getUser(@GetUser() user: User) {
    return this.authService.getUser(user);
  }

  @HttpCode(200)
  @Post('/login')
  async login(@Body(ValidationPipe) authCredentialDto: AuthCredentialDto, @Res() res: Response) {
    return this.authService.login(authCredentialDto, res);
  }

  @Post('/signin')
  async signin(@Body(ValidationPipe) authCredentialDto: AuthCredentialDto) {
    return this.authService.signup(authCredentialDto);
  }
}
