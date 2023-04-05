import { axiosInstance } from '@/lib/axios';
import { useQuery } from 'react-query';
import { Post } from '@/types/Post';

async function getPosts(): Promise<Post[]> {
  const { data } = await axiosInstance.get('/post');
  return data;
}

export function useGetPosts(): Post[] | null {
  const { data = [] } = useQuery<Post[], unknown, Post[] | null, string[]>(['get-posts'], getPosts);

  return data;
}
