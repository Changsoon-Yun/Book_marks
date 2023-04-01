import { Module } from "@nestjs/common";
import { SigninController } from "./signin.controller";
import { SigninService } from "./signin.service";
import { PrismaService } from "../../prisma.service";

@Module({
  controllers: [SigninController],
  providers: [SigninService, PrismaService],
})
export class SigninModule {}
