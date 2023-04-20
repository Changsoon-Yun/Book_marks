import { useUser } from '@/feature/auth/hooks/useUser';
import { BookmarkItem } from '@/types/api/Bookmark';
import { CheckBookmarkReturn } from '@/types/props/CreateBookmarkProps';
import { axiosInstance } from '@/lib/async/axiosInstance';
import { bookmarkAPI } from '@/lib/async/apiRoutes';
import { getJWTHeader } from '@/lib/async/queryClient';
import { createStandaloneToast } from '@chakra-ui/react';
import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';

export async function checkUrl(url?: string): Promise<CheckBookmarkReturn> {
  try {
    const res: AxiosResponse = await axiosInstance.post(
      bookmarkAPI.check(),
      { url },
      {
        headers: getJWTHeader(),
      }
    );
    return res.data;
  } catch (err) {
    throw new Error('에러발생!');
  }
}

const createBookmark = async (bookmarkData: BookmarkItem) => {
  return await axiosInstance.post(bookmarkAPI.create(), bookmarkData, {
    headers: getJWTHeader(),
  });
};

const useCreateBookmark = () => {
  const queryClient = useQueryClient();
  const { toast } = createStandaloneToast();
  const { user } = useUser();
  const { mutate } = useMutation((bookmarkData: BookmarkItem) => createBookmark(bookmarkData), {
    onSuccess: () => {
      queryClient.invalidateQueries([bookmarkAPI.getBookmarks(user?.userName)]);
      toast({
        title: 'You have reserved the appointment!',
        status: 'success',
      });
    },
  });

  return mutate;
};

export default useCreateBookmark;
