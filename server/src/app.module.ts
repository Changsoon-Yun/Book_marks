import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { PostModule } from './post/post.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [AuthModule, PostModule],
})
export class AppModule {}
