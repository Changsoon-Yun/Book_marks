import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  UseGuards,
  ValidationPipe,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthCredentialDto } from "./dto/auth-credential.dto";
import { AuthGuard } from "@nestjs/passport";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get("/get-user/:id")
  @UseGuards(AuthGuard())
  getUser(@Param("id") userId: number) {
    return this.authService.getUser(userId);
  }
  @HttpCode(200)
  @Post("/login")
  async login(@Body(ValidationPipe) authCredentialDto: AuthCredentialDto) {
    return this.authService.login(authCredentialDto);
  }

  @Post("/signin")
  async signin(@Body(ValidationPipe) authCredentialDto: AuthCredentialDto) {
    return this.authService.signup(authCredentialDto);
  }
}
