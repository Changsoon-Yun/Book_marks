import { axiosInstance } from '@/lib/axios';
import { useSetRecoilState } from 'recoil';
import { snackbarAtom } from '@/lib/recoil/atom';
import { useRouter } from 'next/router';
import axios, { AxiosResponse } from 'axios';
import { deleteCookie, setCookie } from '@/lib/cookie/cookie';
import { useUser } from '@/feature/auth/hooks/useUser';
import { User } from '@/types/User';

export function useAuth() {
  const router = useRouter();
  const setSnack = useSetRecoilState(snackbarAtom);
  const { clearUser, updateUser } = useUser();

  async function authServerCall(urlEndpoint: string, data: User) {
    try {
      const response: AxiosResponse = await axiosInstance({
        url: urlEndpoint,
        method: 'POST',
        data: data,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (urlEndpoint === 'auth/login') {
        if (response.status === 200) {
          setCookie('creative-wallet', response.data);
          updateUser(response.data);
          setSnack({
            open: true,
            text: '로그인 성공 !',
          });
          return router.push('/', undefined, {
            shallow: true,
          });
        }
      }

      if (urlEndpoint === 'auth/signin') {
        setSnack({
          open: true,
          text: '계정이 생성되었습니다.',
        });
        return router.push('/auth/login', undefined, {
          shallow: true,
        });
      }
    } catch (err) {
      console.log(err);
      // axios에서 error를 처리하는 방법
      if (axios.isAxiosError(err) && err.response) {
        setSnack({
          open: true,
          text: err.response.data.message,
        });
      }
    }
  }

  async function login(data: User) {
    await authServerCall('auth/login', data);
  }

  async function signin(data: User) {
    await authServerCall('auth/signin', data);
  }

  function logout() {
    deleteCookie();
    clearUser();
  }

  return {
    login,
    signin,
    logout,
  };
}
