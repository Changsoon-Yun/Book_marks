import { axiosInstance } from '@/lib/axios';
import { getJWTHeader } from '@/lib/axios/queryClient';
import { createStandaloneToast } from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/router';

export type UserInput = {
  url: string;
  content: string;
  folderId?: number;
};

const { toast } = createStandaloneToast();

export function useCreateBookmark() {
  const router = useRouter();

  async function createBookmark(data: UserInput) {
    try {
      const res = await axiosInstance.post('/bookmark/write', data, {
        headers: getJWTHeader(),
      });
      if (res.status === 201) {
        toast({ title: '북마크에 성공!', status: 'error', variant: 'subtle', isClosable: true });
        return router.push('/');
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
      }
    }
  }

  return { createBookmark };
}
