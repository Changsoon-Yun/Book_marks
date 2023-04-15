import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '@prisma/client';
import { GetUser } from '../auth/get-user.decorator';
import { BookmarkService } from './bookmark.service';
import { BookmarkDto } from './dto/bookmark.dto';

@Controller('bookmark')
export class BookmarkController {
  constructor(private bookmarkService: BookmarkService) {}

  @Get()
  getBookmarks() {
    return this.bookmarkService.getBookmark();
  }

  @Post('/check')
  @UseGuards(AuthGuard())
  checkUrl(@GetUser() user: User, @Body('url') url: string) {
    return this.bookmarkService.checkUrl(user, url);
  }

  @Post('/create')
  @UseGuards(AuthGuard())
  createPost(@GetUser() user: User, @Body() bookmarkDto: BookmarkDto) {
    return this.bookmarkService.createBookmark(user, bookmarkDto);
  }
}
