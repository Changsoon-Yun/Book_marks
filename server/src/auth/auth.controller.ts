import {
  Body,
  Controller,
  HttpCode,
  Post,
  Req,
  UseGuards,
  ValidationPipe,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthCredentialDto } from "./dto/auth-credential.dto";
import { AuthGuard } from "@nestjs/passport";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(200)
  @Post("/login")
  async login(@Body(ValidationPipe) authCredentialDto: AuthCredentialDto) {
    return this.authService.login(authCredentialDto);
  }

  @Post("/signin")
  async signin(@Body(ValidationPipe) authCredentialDto: AuthCredentialDto) {
    return this.authService.signup(authCredentialDto);
  }

  @Post("/get-user")
  @UseGuards(AuthGuard())
  getUser(@Req() req) {
    return req.body;
  }
}
