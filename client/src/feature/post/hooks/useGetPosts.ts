import { axiosInstance } from '@/lib/axios';
import { useQuery } from 'react-query';

async function getPosts() {
  const { data } = await axiosInstance.get('/post');
  return data;
}

export function useGetPosts() {
  const { data = [] } = useQuery(['get-posts'], getPosts);

  return { data };
}
