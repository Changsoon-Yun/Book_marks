import { axiosInstance } from '@/lib/axios';
import { BookmarkReturn, CreateBookmarkProps } from '@/feature/index/interface/CreateBookmarkProps';
import { getJWTHeader } from '@/lib/axios/queryClient';

export async function checkUrl(url: string) {
  return await axiosInstance.post('/bookmark/check', url, {
    headers: getJWTHeader(),
  });
}

// export default function UseBookmark() {}
