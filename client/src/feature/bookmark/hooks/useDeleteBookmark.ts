import { useMutation, useQueryClient } from 'react-query';
import { axiosInstance } from '@/lib/async/axiosInstance';
import { Bookmark } from '@/types/api/Bookmark';
import { bookmarkAPI } from '@/lib/async/apiRoutes';
import { useUser } from '@/feature/auth/hooks/useUser';
import { getJWTHeader } from '@/lib/async/queryClient';

const deleteBookmark = async (bookmark: Bookmark): Promise<Bookmark> => {
  return axiosInstance.delete(bookmarkAPI.delete(bookmark.id), {
    headers: getJWTHeader(),
  });
};
export default function useDeleteBookmark() {
  const queryClient = useQueryClient();
  const { user } = useUser();
  const { mutate } = useMutation((bookmark: Bookmark) => deleteBookmark(bookmark), {
    onSuccess: () => {
      queryClient.invalidateQueries([bookmarkAPI.getBookmarks(user?.userName)]);
    },
  });

  return mutate;
}
