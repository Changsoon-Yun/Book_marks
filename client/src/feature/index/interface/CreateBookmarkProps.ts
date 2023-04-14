export interface CreateBookmarkProps {
  url: string;
  title: string;
  description: string;
}

export interface BookmarkReturn {
  url: string;
  title: string;
  description: string;
  imageUrl: string;
  faviconUrl: string;
}

export interface CreateBookmark extends BookmarkReturn {
  userId: string;
  folderId: null;
}
