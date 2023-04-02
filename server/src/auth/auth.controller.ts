import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthCredentialDto } from "./auth-credential.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/signin")
  async signin(@Body() authCredentialDto: AuthCredentialDto) {
    return this.authService.signup(authCredentialDto);
  }
}
