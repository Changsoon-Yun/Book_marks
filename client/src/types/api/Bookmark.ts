import { Folder } from '@/types/api/Folder';
import React from 'react';

export interface Bookmark {
  id: number;
  title: string;
  userId: number;
  published: boolean;
  createdAt: Date;
  description: string;
  folderId: number;
  updatedAt: Date;
  url: string;
  imageUrl: string;
  folder: Folder[];
  user: string;
  faviconUrl: string;
}

export interface BookmarkItem {
  url: string;
  title: string;
  description: string;
  imageUrl: string;
  faviconUrl: string;
}
