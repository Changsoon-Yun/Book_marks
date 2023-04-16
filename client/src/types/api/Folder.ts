import { Bookmark } from '@/types/api/Bookmark';
import { User } from '@/types/api/User';

export interface Folder {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  parentId?: number;
  userId: number;
  bookmarks: Bookmark[];
  parent?: Folder;
  children: Folder[];
  user: User;
}
