import { axiosInstance } from '@/lib/axios';
import { Post } from '@/types/Post';
import { useQuery } from 'react-query';

async function getPosts(): Promise<Post[]> {
  const { data } = await axiosInstance.get('/post');
  return data;
}

export function useGetPosts(): Post[] | null {
  const { data = [] } = useQuery<Post[], unknown, Post[] | null, string[]>(['get-posts'], getPosts);

  return data;
}
