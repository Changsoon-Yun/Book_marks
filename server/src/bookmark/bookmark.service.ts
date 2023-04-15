import { Injectable } from '@nestjs/common';
import { Bookmark, User } from '@prisma/client';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { PrismaService } from '../prisma.service';
import { BookmarkDto } from './dto/bookmark.dto';

//import iconv from 'iconv-lite';
const DEFAULT_IMAGE = 'http://localhost:4000/public/images/image.jpg';

interface PageData {
  url?: string;
  type?: string;
  image?: string;
  alt?: string;
  width?: string;
  height?: string;
  locale?: string;
  site_name?: string;
  title?: string;
  description?: string;
  faviconUrl?: string;
}

@Injectable()
export class BookmarkService {
  constructor(private prisma: PrismaService) {}

  async getBookmark(): Promise<Bookmark[] | null> {
    return this.prisma.bookmark.findMany({});
  }

  async checkUrl(user: User, url: string) {
    if (!url) return;
    try {
      const { title, description, image, faviconUrl, type, alt, width, height, locale, site_name } = await getPageInfo(
        url
      );
      return {
        url,
        title: title ?? '페이지 제목을 찾을 수 없습니다.',
        description: description ?? '페이지 설명을 찾을 수 없습니다.',
        imageUrl: image ?? '대표 이미지가 없습니다.',
        faviconUrl: faviconUrl ?? '파비콘을 찾을 수 없습니다.',
        type,
        alt,
        width,
        height,
        locale,
        site_name,
      };
    } catch (err) {
      console.log(err);
    }
  }

  async createBookmark(user: User, bookmarkDto: BookmarkDto) {
    const { title, description, imageUrl, faviconUrl, url } = bookmarkDto;
    const folder = await this.prisma.folder.findFirst({
      where: {
        userId: user.id,
      },
      select: { id: true },
    });

    try {
      return this.prisma.bookmark.create({
        data: {
          url,
          title: title,
          description: description,
          imageUrl: imageUrl ?? DEFAULT_IMAGE,
          userId: user.id,
          faviconUrl,
          folderId: folder.id,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }
}

const getPageInfo = async (url: string) => {
  try {
    const { data: html } = await axios.get(url, {
      headers: {
        Accept: 'text/html,*/*',
      },
    });

    const $ = cheerio.load(html);
    const ogTags: PageData = {};
    const faviconTags: string[] = [];

    const head = $('head');

    // og 태그 파싱
    head.find('meta').each((index, element) => {
      const property = $(element).attr('property');
      if (property?.startsWith('og:')) {
        const key = property.replace('og:', '');
        key.replace('image', '');
        ogTags[key] = $(element).attr('content');
      }
    });

    // favicon 태그 파싱
    head.find('link').each((index, element) => {
      const rel = $(element).attr('rel');
      if (rel === 'shortcut icon' || rel === 'icon') {
        // href 속성에서 URL 절대경로로 바꾸기
        const href = $(element).attr('href');
        const hrefUrl = new URL(href, url).href;
        faviconTags.push(hrefUrl);
      }
    });

    return {
      ...ogTags,
      faviconUrl: faviconTags[0],
    };
  } catch (err) {
    console.log(err);
  }
};
