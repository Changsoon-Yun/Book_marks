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
  getPosts() {
    return this.bookmarkService.getBookmark();
  }

  @Post('/write')
  @UseGuards(AuthGuard())
  createPost(@GetUser() user: User, @Body() bookmarkDto: BookmarkDto) {
    return this.bookmarkService.createBookmark(user, bookmarkDto);
  }
}
