import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { PostDto } from './dto/post.dto';
import { Post, User } from '@prisma/client';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async getPosts(): Promise<Post[] | null> {
    const res = await this.prisma.post.findMany({});
    console.log(res);
    return res;
  }
  async createPost(user: User, postDto: PostDto): Promise<Post> {
    const { title, content } = postDto;
    return this.prisma.post.create({
      data: {
        title,
        content,
        authorId: user.id,
      },
    });
  }
}
