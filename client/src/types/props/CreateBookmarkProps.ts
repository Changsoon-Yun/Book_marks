export interface CreateBookmarkProps {
  url: string;
  title: string;
  description: string;
}

export interface CheckBookmarkReturn {
  url?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  faviconUrl?: string;
  type?: string;
  alt?: string;
  width?: string;
  height?: string;
  locale?: string;
  site_name?: string;
}

export interface CreateBookmarkReturn extends CheckBookmarkReturn {
  userId: string;
  folderId: null;
}
