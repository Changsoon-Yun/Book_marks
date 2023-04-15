import { useUser } from '@/feature/auth/hooks/useUser';
import { axiosInstance } from '@/lib/async/axiosInstance';
import { authAPI } from '@/lib/async/constants';
import { COOKIE_NAME, deleteCookie, setCookie } from '@/lib/cookie/cookie';
import { User } from '@/types/User';
import { createStandaloneToast } from '@chakra-ui/react';
import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';

const { toast } = createStandaloneToast();

const SERVER_ERROR = 'There was an error contacting the server.';

export function useAuth() {
  const router = useRouter();
  const { clearUser, updateUser, user } = useUser();

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

      if (urlEndpoint === authAPI.login) {
        if (response.status === 200) {
          setCookie(COOKIE_NAME, response.data);
          updateUser(response.data);
          toast({ title: '로그인 성공 !', status: 'success', variant: 'subtle', isClosable: true });

          return router.push('/', undefined, {
            shallow: true,
          });
        }
      }

      if (urlEndpoint === authAPI.signup) {
        toast({ title: '계정 생성 성공 !', status: 'success', variant: 'subtle', isClosable: true });
        return router.push('/auth/login', undefined, {
          shallow: true,
        });
      }
    } catch (err) {
      const message =
        axios.isAxiosError(err) && err?.response?.data?.message ? err?.response?.data?.message : SERVER_ERROR;

      const title =
        typeof message === 'string' ? message : message.map((item: string, i: number) => <div key={i}>{item}</div>);
      return toast({ title, status: 'error', variant: 'subtle', isClosable: true });
    }
  }

  async function login(data: User) {
    await authServerCall(authAPI.login, data);
  }

  async function signup(data: User) {
    await authServerCall(authAPI.signup, data);
  }

  async function logout() {
    await deleteCookie();
    await clearUser();
  }

  return {
    user,
    login,
    signup,
    logout,
  };
}
