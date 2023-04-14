import { Injectable } from '@nestjs/common';
import { Bookmark, User } from '@prisma/client';
import puppeteer from 'puppeteer';
import { PrismaService } from '../prisma.service';
import { BookmarkDto } from './dto/bookmark.dto';

//import iconv from 'iconv-lite';
const DEFAULT_IMAGE = 'http://localhost:4000/public/images/image.jpg';
@Injectable()
export class BookmarkService {
  constructor(private prisma: PrismaService) {}

  async getBookmark(): Promise<Bookmark[] | null> {
    return this.prisma.bookmark.findMany({});
  }

  async checkUrl(user: User, url: string) {
    try {
      const { pageTitle, pageDescription, imageUrl, faviconUrl } = await getPageInfo(url);

      return {
        url,
        title: pageTitle ?? '페이지 제목을 찾을 수 없습니다.',
        description: pageDescription ?? '페이지 설명을 찾을 수 없습니다.',
        imageUrl: imageUrl ?? '대표 이미지가 없습니다.',
        faviconUrl: faviconUrl ?? '파비콘을 찾을 수 없습니다.',
      };
    } catch (err) {
      console.log(err);
    }
  }

  async createBookmark(user: User, bookmarkDto: BookmarkDto) {
    const { url, title, description, imageUrl } = bookmarkDto;

    try {
      const { imageUrl, faviconUrl } = await getPageInfo(url);

      return this.prisma.bookmark.create({
        //TODO: imageUrl 유저에게 받아 처리할지 확인
        data: {
          url,
          title: title,
          description: description,
          imageUrl: imageUrl ?? DEFAULT_IMAGE,
          userId: user.id,
          faviconUrl,
          folderId: null,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }
}

const getPageInfo = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const pageTitle = await page.$eval('head > meta[property="og:title"]', (element) => element.content);
  const imageUrl = await page.$eval('head > meta[property="og:image"]', (element) => element.content);
  const pageDescription = await page.$eval('head > meta[property="og:description"]', (element) => element.content);
  const faviconUrl = await page.$$eval(
    'link[rel="shortcut icon"], link[rel="icon"]',
    (links) => links.map((link) => link.href)[0]
  );
  await browser.close();
  return {
    pageTitle,
    imageUrl,
    pageDescription,
    faviconUrl,
  };
};
