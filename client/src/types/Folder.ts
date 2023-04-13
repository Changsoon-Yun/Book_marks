import { Bookmark } from '@/types/Bookmark';
import { User } from '@/types/User';

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
