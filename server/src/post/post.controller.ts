import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '@prisma/client';
import { GetUser } from '../auth/get-user.decorator';
import { PostDto } from './dto/post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  getPosts() {
    return this.postService.getPosts();
  }

  @Post('/write')
  @UseGuards(AuthGuard())
  createPost(@GetUser() user: User, @Body() postDto: PostDto) {
    return this.postService.createPost(user, postDto);
  }
}
