import { axiosInstance } from '@/lib/axios';
import { getJWTHeader } from '@/lib/axios/queryClient';
import { snackbarAtom } from '@/lib/recoil/atom';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';

export type UserInput = {
  title: string;
  content: string;
};

export function useCreatePost() {
  const setSnack = useSetRecoilState(snackbarAtom);
  const router = useRouter();

  async function createPost(data: UserInput) {
    try {
      const res = await axiosInstance.post('/post/write', data, {
        headers: getJWTHeader(),
      });
      if (res.status === 201) {
        setSnack({
          open: true,
          text: '게시글이 생성되었습니다.',
        });
        return router.push('/post');
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setSnack({
          open: true,
          text: err.response.data.message,
        });
      }
    }
  }

  return { createPost };
}
