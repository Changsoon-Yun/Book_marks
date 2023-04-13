import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { PuppeteerModule } from 'nest-puppeteer';
import { PrismaService } from '../prisma.service';
import { BookmarkController } from './bookmark.controller';
import { BookmarkService } from './bookmark.service';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' }), PuppeteerModule.forRoot()],
  providers: [BookmarkService, PrismaService],
  controllers: [BookmarkController],
})
export class BookmarkModule {}
