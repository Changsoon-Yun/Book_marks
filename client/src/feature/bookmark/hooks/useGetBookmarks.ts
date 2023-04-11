import { axiosInstance } from '@/lib/axios';
import { useQuery } from 'react-query';

async function getBookmarks() {
  const { data } = await axiosInstance.get('/bookmark');
  return data;
}

export function useGetBookmarks() {
  const { data = [] } = useQuery(['get-bookmarks'], getBookmarks);

  return { data };
}
