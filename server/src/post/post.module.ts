import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from '../prisma.service';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
  providers: [PostService, PrismaService],
  controllers: [PostController],
})
export class PostModule {}
