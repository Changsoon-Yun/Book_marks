import { useUser } from '@/feature/auth/hooks/useUser';
import { bookmarkAPI } from '@/lib/async/apiRoutes';
import { Bookmark } from '@/types/api/Bookmark';
import { useQuery } from 'react-query';
import { axiosInstance } from '@/lib/async/axiosInstance';

async function getBookmarks(userName: string | string[]): Promise<Bookmark[]> {
  const { data } = await axiosInstance.get(`/bookmark/${userName}`);
  return data;
}

export function useGetBookmarks(userName: string | string[]) {
  const { data = [] } = useQuery<Bookmark[]>([bookmarkAPI.getBookmarks(userName)], () => getBookmarks(userName));

  return { data };
}
