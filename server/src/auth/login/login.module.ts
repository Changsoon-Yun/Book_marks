import { Module } from "@nestjs/common";
import { LoginController } from "./login.controller";
import { LoginService } from "./login.service";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "../jwt/jwt.strategy";
import { PrismaService } from "../../prisma.service";

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: "jwt", session: false }),
    JwtModule.register({ secret: "secret", signOptions: { expiresIn: "1m" } }),
  ],
  controllers: [LoginController],
  providers: [LoginService, JwtStrategy, PrismaService],
})
export class LoginModule {}