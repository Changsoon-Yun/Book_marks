import { useGetBookmarks } from '@/feature/bookmark/hooks/useGetBookmarks';
import BookmarkTemplate from '@/feature/bookmark/BookmarkTemplate';

export default function Post() {
  const { data: bookmarks } = useGetBookmarks();
  return <BookmarkTemplate bookmarks={bookmarks} />;
}
