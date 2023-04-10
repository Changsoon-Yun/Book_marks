import { Injectable } from '@nestjs/common';
import { Post, User } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { PostDto } from './dto/post.dto';
import axios from 'axios';
import cheerio from 'cheerio';
import iconv from 'iconv-lite';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async getPosts(): Promise<Post[] | null> {
    const res = await this.prisma.post.findMany({});
    console.log(res);
    return res;
  }

  // async createPost(user: User, postDto: PostDto): Promise<Post> {
  //   const { title, content } = postDto;
  //   return this.prisma.post.create({
  //     data: {
  //       title,
  //       content,
  //       authorId: user.id,
  //     },
  //   });
  // }

  async createPost(user: User, postDto: PostDto) {
    const { title, content } = postDto;
    try {
      const res = await axios.get(title);
      const $ = cheerio.load(res.data);
      console.log($);
      // const content = iconv.decode(res.data, 'EUC-KR');
      // console.log($.html());
      // console.log(content);
    } catch (err) {
      console.log(err);
    }
  }
}
