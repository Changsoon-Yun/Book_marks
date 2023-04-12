import { useUser } from '@/feature/auth/hooks/useUser';
import { axiosInstance } from '@/lib/axios';
import { deleteCookie, setCookie } from '@/lib/cookie/cookie';
import { User } from '@/types/User';
import { createStandaloneToast } from '@chakra-ui/react';
import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';

const { toast } = createStandaloneToast();
export function useAuth() {
  const router = useRouter();
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
          toast({ title: '로그인 성공 !', status: 'success', variant: 'subtle', isClosable: true });

          return router.push('/', undefined, {
            shallow: true,
          });
        }
      }

      if (urlEndpoint === 'auth/signin') {
        toast({ title: '계정 생성 성공 !', status: 'success', variant: 'subtle', isClosable: true });
        return router.push('/auth/login', undefined, {
          shallow: true,
        });
      }
    } catch (err) {
      console.log(err);
      // axios에서 error를 처리하는 방법
      if (axios.isAxiosError(err) && err.response) {
        const message = err.response.data.message.map((item: string, i: number) => <div key={i}>{item}</div>);
        const title = err instanceof Error ? message : 'error connecting to server';

        return toast({ title, status: 'error', variant: 'subtle', isClosable: true });
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