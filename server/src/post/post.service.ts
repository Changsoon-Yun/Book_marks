import { Injectable } from '@nestjs/common';
import { Post, User } from '@prisma/client';
import puppeteer from 'puppeteer';
import { PrismaService } from '../prisma.service';
import { PostDto } from './dto/post.dto';

//import iconv from 'iconv-lite';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async getPosts(): Promise<Post[] | null> {
    const res = await this.prisma.post.findMany({});
    console.log(res);
    return res;
  }

  async createPost(user: User, postDto: PostDto) {
    const { title: url, content } = postDto;
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(url);
      const name = await page.$eval('head > meta[property="og:title"]', (element) => element.content);
      const image = await page.$eval('head > meta[property="og:image"]', (element) => element.content);
      const description = await page.$eval('head > meta[property="og:description"]', (element) => element.content);

      return {
        name,
        image,
        description,
      };
    } catch (err) {
      console.log(err);
    }
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
}
