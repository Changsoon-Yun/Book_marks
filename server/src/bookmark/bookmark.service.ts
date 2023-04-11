import { Injectable } from '@nestjs/common';
import { Bookmark, User } from '@prisma/client';
import puppeteer from 'puppeteer';
import { PrismaService } from '../prisma.service';
import { BookmarkDto } from './dto/bookmark.dto';

//import iconv from 'iconv-lite';

@Injectable()
export class BookmarkService {
  constructor(private prisma: PrismaService) {}

  async getBookmark(): Promise<Bookmark[] | null> {
    return this.prisma.bookmark.findMany({});
  }

  async createBookmark(user: User, bookmarkDto: BookmarkDto) {
    const { url, content } = bookmarkDto;
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(url);
      const title = await page.$eval('head > meta[property="og:title"]', (element) => element.content);
      const imageUrl = await page.$eval('head > meta[property="og:image"]', (element) => element.content);
      const description = await page.$eval('head > meta[property="og:description"]', (element) => element.content);

      return this.prisma.bookmark.create({
        data: {
          title,
          url,
          userId: user.id,
          imageUrl,
          description,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }
}
