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
    const { url, title, description } = bookmarkDto;

    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(url);
      const pageTitle = await page.$eval('head > meta[property="og:title"]', (element) => element.content);
      const imageUrl = await page.$eval('head > meta[property="og:image"]', (element) => element.content);
      const pageDescription = await page.$eval('head > meta[property="og:description"]', (element) => element.content);
      const folderId = await this.prisma.folder.findFirst({
        where: {
          userId: user.id,
        },
      });
      return this.prisma.bookmark.create({
        //TODO: imageUrl 유저에게 받아 처리할지 확인
        data: {
          url,
          title: title ?? pageTitle,
          description: description ?? pageDescription,
          imageUrl: imageUrl ?? imageUrl,
          userId: user.id,
          folderId: folderId.id,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }
}
