import { Folder } from '@/types/Folder';

export interface Bookmark {
  id: number;
  title: string;
  userId: number;
  published: boolean;
  createdAt: Date;
  description: string;
  folderId: number;
  parentId: number;
  updatedAt: Date;
  url: string;
  imageUrl: string;
  folder: Folder[];
  user: string;
}
