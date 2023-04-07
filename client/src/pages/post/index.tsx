import { useGetPosts } from '@/feature/post/hooks/useGetPosts';
import PostTemplate from '@/feature/post/PostTemplate';

export default function Post() {
  const { data: posts } = useGetPosts();
  return <PostTemplate posts={posts} />;
}
