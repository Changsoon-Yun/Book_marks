import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { FolderModule } from './folder/folder.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [AuthModule, BookmarkModule, FolderModule],
})
export class AppModule {}
