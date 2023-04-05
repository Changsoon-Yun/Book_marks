import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { PostDto } from "./dto/post.dto";
import { AuthGuard } from "@nestjs/passport";
import { PostService } from "./post.service";
import { GetUser } from "../auth/get-user.decorator";
import { User } from "@prisma/client";

@Controller("post")
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  getPosts() {
    return this.postService.getPosts();
  }

  @Post("/write")
  @UseGuards(AuthGuard())
  createPost(@GetUser() user: User, @Body() postDto: PostDto) {
    return this.postService.createPost(user, postDto);
  }
}
