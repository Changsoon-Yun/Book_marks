import { AxiosResponse } from 'axios';
import { axiosInstance } from '@/lib/axios';
import { deleteCookie, getCookie, setCookie } from '@/lib/cookie/cookie';
import { useQuery, useQueryClient } from 'react-query';
import { getJWTHeader } from '@/lib/axios/queryClient';

interface UseUser {
  user: User | null | undefined;
  updateUser: (user: User) => void;
  clearUser: () => void;
}

export interface User {
  id: number;
  email: string;
  accessToken: string;
}

async function getUser(user: User | null | undefined, signal: AbortSignal | undefined) {
  if (!user) return null;
  const { data }: AxiosResponse<{ user: User }> = await axiosInstance.get(`/auth/get-user/${user.id}`, {
    headers: getJWTHeader(),
    signal,
  });
  return data;
}

export function useUser(): UseUser {
  const queryClient = useQueryClient();
  const { data: user } = useQuery<any, unknown, User | null | undefined, string[]>(
    ['get-user'],
    ({ signal }) => getUser(user, signal),
    {
      initialData: getCookie(),
      onSuccess: (received: User | null | undefined) => {
        if (!received) {
          deleteCookie();
        } else {
          setCookie('creative-wallet', received);
        }
      },
    }
  );

  function updateUser(user: User) {
    queryClient.setQueryData(['get-user'], user);
  }

  function clearUser() {
    queryClient.setQueryData(['get-user'], null);
  }

  return { user, updateUser, clearUser };
}
