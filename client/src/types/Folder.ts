import { User } from '@/types/User';
import { Bookmark } from '@/types/Bookmark';

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
