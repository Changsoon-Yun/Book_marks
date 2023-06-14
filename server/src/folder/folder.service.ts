import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, User } from '@prisma/client';
import { FolderDto } from './dto/folder.dto';

@Injectable()
export class FolderService {
  constructor(private prisma: PrismaService) {
    // prisma.$on<any>('query', (event: Prisma.QueryEvent) => {
    //   console.log('FolderQuery: ' + event.query);
    //   console.log('Duration: ' + event.duration + 'ms');
    // });
  }

  async getFolders(userName) {
    const user = await this.prisma.user.findUnique({ where: { userName } });
    const topLevelFolders = await this.prisma.folder.findMany({
      where: { userId: user.id, parentId: null },
      include: { children: true, bookmarks: true },
    });
    const fetchChildren = async (folders) => {
      for (const folder of folders) {
        if (folder.children.length > 0) {
          folder.children = await this.prisma.folder.findMany({
            where: { parentId: folder.id },
            include: { children: true, bookmarks: true },
          });
          await fetchChildren(folder.children);
        }
      }
    };
    await fetchChildren(topLevelFolders);
    return topLevelFolders;
  }

  async createFolder(user: User, folderDto: FolderDto) {
    const { parentId, name } = folderDto;

    const res = await this.prisma.folder.create({
      data: {
        name,
        parentId,
        userId: user.id,
      },
    });

    return this.prisma.folder.update({
      where: { id: res.id },
      data: { orderId: res.id },
    });
  }
}
