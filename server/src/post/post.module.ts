import { Module } from "@nestjs/common";
import { PostService } from "./post.service";
import { PostController } from "./post.controller";
import { PrismaService } from "../prisma.service";
import { PassportModule } from "@nestjs/passport";

@Module({
  imports: [PassportModule.register({ defaultStrategy: "jwt" })],
  providers: [PostService, PrismaService],
  controllers: [PostController],
})
export class PostModule {}
