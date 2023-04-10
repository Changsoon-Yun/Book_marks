import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { PuppeteerModule } from 'nest-puppeteer';
import { PrismaService } from '../prisma.service';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' }), PuppeteerModule.forRoot()],
  providers: [PostService, PrismaService],
  controllers: [PostController],
})
export class PostModule {}
