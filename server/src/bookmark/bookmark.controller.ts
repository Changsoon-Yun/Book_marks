import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '@prisma/client';
import { GetUser } from '../auth/get-user.decorator';
import { BookmarkDto } from './dto/bookmark.dto';

@Controller('post')
export class BookmarkService {
  constructor(private postService: BookmarkService) {}

  @Get()
  getPosts() {
    return this.postService.getPosts();
  }

  @Post('/write')
  @UseGuards(AuthGuard())
  createPost(@GetUser() user: User, @Body() postDto: BookmarkDto) {
    return this.postService.createPost(user, postDto);
  }
}
