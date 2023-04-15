export interface CreateBookmarkProps {
  url: string;
  title: string;
  description: string;
}

export interface CheckBookmarkReturn {
  url: string;
  title: string;
  description: string;
  imageUrl: string;
  faviconUrl: string;
}

export interface CreateBookmarkReturn extends CheckBookmarkReturn {
  userId: string;
  folderId: null;
}
