import { useMutation, useQueryClient } from 'react-query';
import { axiosInstance } from '@/lib/async/axiosInstance';
import { Bookmark } from '@/types/api/Bookmark';
import { bookmarkAPI } from '@/lib/async/apiRoutes';
import { useUser } from '@/feature/auth/hooks/useUser';
import { getJWTHeader } from '@/lib/async/queryClient';
import { useToast } from '@chakra-ui/react';

const updateBookmark = async ({ bookmark, type }: { bookmark: Bookmark; type?: 'order' }): Promise<Bookmark> => {
  console.log(bookmark, type);
  return axiosInstance.patch(
    bookmarkAPI.edit(bookmark.id),
    { ...bookmark, type },
    {
      headers: getJWTHeader(),
    }
  );
};
export default function useUpdateBookmark() {
  const queryClient = useQueryClient();
  const toast = useToast();
  const { user } = useUser();
  const { mutate } = useMutation(
    ({ bookmark, type }: { bookmark: Bookmark; type?: 'order' }) => updateBookmark({ bookmark, type }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([bookmarkAPI.getBookmarks(user?.userName)]);
        toast({ title: '성공했어요!', status: 'success' });
      },
    }
  );

  return mutate;
}
