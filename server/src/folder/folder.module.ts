import { Module } from '@nestjs/common';
import { FolderController } from './folder.controller';
import { FolderService } from './folder.service';
import { PassportModule } from '@nestjs/passport';
import { PuppeteerModule } from 'nest-puppeteer';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' }), PuppeteerModule.forRoot()],
  providers: [FolderService, PrismaService],
  controllers: [FolderController],
})
export class FolderModule {}
