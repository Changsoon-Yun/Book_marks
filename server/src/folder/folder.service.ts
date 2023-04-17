import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User } from '@prisma/client';
import { FolderDto } from './dto/folder.dto';

@Injectable()
export class FolderService {
  constructor(private prisma: PrismaService) {}

  async getFolders(userName) {
    const user = await this.prisma.user.findUnique({
      where: {
        userName,
      },
    });
    const unFilteredFolders = await this.prisma.folder.findMany({
      where: {
        userId: user.id,
        parentId: null,
      },
      include: {
        children: {
          include: {
            children: {
              include: {
                children: true,
                bookmarks: true,
              },
            },
          },
        },
      },
    });

    console.log(unFilteredFolders);
    return unFilteredFolders;
  }

  async createFolder(user: User, folderDto: FolderDto) {
    const { parentId, name } = folderDto;

    return this.prisma.folder.create({
      data: {
        name,
        parentId,
        userId: user.id,
      },
    });
  }
}
