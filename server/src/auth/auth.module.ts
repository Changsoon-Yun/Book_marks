import { Module } from "@nestjs/common";
import { LoginModule } from "./login/login.module";
import { SigninModule } from "./signin/signin.module";

@Module({
  imports: [LoginModule, SigninModule],
})
export class AuthModule {}
