import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { FolderService } from './folder.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../auth/get-user.decorator';
import { User } from '@prisma/client';
import { FolderDto } from './dto/folder.dto';

@Controller('folder')
export class FolderController {
  constructor(private folderService: FolderService) {}

  @Get('/:userName')
  getFolders(@Param('userName') userName: string | string[]) {
    return this.folderService.getFolders(userName);
  }

  @Post('create')
  @UseGuards(AuthGuard())
  createFolder(@GetUser() user: User, @Body() folderDto: FolderDto) {
    return this.folderService.createFolder(user, folderDto);
  }
}
