import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Bookmark, User } from '@prisma/client';
import { GetUser } from '../auth/get-user.decorator';
import { BookmarkService } from './bookmark.service';
import { BookmarkDto } from './dto/bookmark.dto';

export interface BookmarkWithType extends Bookmark {
  type?: 'order';
}
@Controller('bookmark')
export class BookmarkController {
  constructor(private bookmarkService: BookmarkService) {}

  @Get('/:userName')
  getBookmarks(@Param('userName') userName: string | string[]) {
    return this.bookmarkService.getBookmark(userName);
  }

  @Post('/check')
  @UseGuards(AuthGuard())
  checkUrl(@GetUser() user: User, @Body('url') url: string) {
    return this.bookmarkService.checkUrl(user, url);
  }

  @Post('/create')
  @UseGuards(AuthGuard())
  createBookmark(@GetUser() user: User, @Body() bookmarkDto: BookmarkDto) {
    return this.bookmarkService.createBookmark(user, bookmarkDto);
  }

  @Patch('/edit/:id')
  @UseGuards(AuthGuard())
  updateBookmark(@GetUser() user: User, @Body() bookmark: BookmarkWithType, @Param('id') id: number) {
    return this.bookmarkService.updateBookmark(user, bookmark, id);
  }

  @Delete('/delete/:id')
  @UseGuards(AuthGuard())
  deleteBookmark(@GetUser() user: User, @Param('id') id: number) {
    return this.bookmarkService.deleteBookmark(user, id);
  }
}
