import { useMutation, useQueryClient } from 'react-query';
import { axiosInstance } from '@/lib/async/axiosInstance';
import { Bookmark } from '@/types/api/Bookmark';
import { bookmarkAPI } from '@/lib/async/apiRoutes';
import { useUser } from '@/feature/auth/hooks/useUser';
import { getJWTHeader } from '@/lib/async/queryClient';

const updateBookmark = async (bookmark: Bookmark): Promise<Bookmark> => {
  console.log(bookmark.id);
  return axiosInstance.patch(bookmarkAPI.edit(bookmark.id), bookmark, {
    headers: getJWTHeader(),
  });
};
export default function useUpdateBookmark() {
  const queryClient = useQueryClient();
  const { user } = useUser();
  const { mutate } = useMutation((bookmark: Bookmark) => updateBookmark(bookmark), {
    onSuccess: () => {
      queryClient.invalidateQueries([bookmarkAPI.getBookmarks(user?.userName)]);
    },
  });

  return mutate;
}
