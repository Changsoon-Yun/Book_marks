import { useGetPosts } from '@/feature/bookmark/hooks/useGetPosts';
import BookmarkTemplate from '@/feature/bookmark/BookmarkTemplate';

export default function Post() {
  const { data: posts } = useGetPosts();
  return <BookmarkTemplate posts={posts} />;
}
