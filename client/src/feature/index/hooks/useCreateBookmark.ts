import { CreateBookmarkData } from '@/feature/index/interface/CreateBookmarkData';
import { CheckBookmarkReturn } from '@/feature/index/interface/CreateBookmarkProps';
import { axiosInstance } from '@/lib/async/axiosInstance';
import { bookmarkAPI } from '@/lib/async/constants';
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

const createBookmark = async (bookmarkData: CreateBookmarkData) => {
  return await axiosInstance.post(bookmarkAPI.create(), bookmarkData, {
    headers: getJWTHeader(),
  });
};

const useCreateBookmark = () => {
  const queryClient = useQueryClient();
  const { toast } = createStandaloneToast();

  const { mutate } = useMutation((bookmarkData: CreateBookmarkData) => createBookmark(bookmarkData), {
    onSuccess: () => {
      queryClient.invalidateQueries([bookmarkAPI.getBookmarks]);
      toast({
        title: 'You have reserved the appointment!',
        status: 'success',
      });
    },
  });

  return mutate;
};

export default useCreateBookmark;
