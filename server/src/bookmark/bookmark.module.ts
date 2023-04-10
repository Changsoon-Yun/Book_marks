import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { PuppeteerModule } from 'nest-puppeteer';
import { PrismaService } from '../prisma.service';
import { BookmarkService } from './bookmark.service';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' }), PuppeteerModule.forRoot()],
  providers: [BookmarkService, PrismaService],
  controllers: [BookmarkService],
})
export class BookmarkModule {}
