import { useGetPosts } from '@/feature/post/hooks/useGetPosts';
import PostTemplate from '@/feature/post/PostTemplate';
import { Post as PostType } from '@/types/Post';

export interface PostProps {
  data: PostType[] | null;
}

export default function Post() {
  const data = useGetPosts();
  console.log(data);
  return <PostTemplate />;
}