import { axiosInstance } from '@/lib/axios';
import { getJWTHeader } from '@/lib/axios/queryClient';
import { deleteCookie, getCookie, setCookie } from '@/lib/cookie/cookie';
import { AxiosResponse } from 'axios';
import { useQuery, useQueryClient } from 'react-query';

interface UseUser {
  user: UserWidthToken | null | undefined;
  updateUser: (user: UserWidthToken) => void;
  clearUser: () => void;
}

export interface UserWidthToken {
  id: number;
  email: string;
  accessToken: string;
}

export async function getUser(user: UserWidthToken | null | undefined, signal: AbortSignal | undefined) {
  if (!user) return null;
  const { data }: AxiosResponse<{ user: UserWidthToken }> = await axiosInstance.get(`/auth/get-user/${user.id}`, {
    headers: getJWTHeader(),
    signal,
  });
  return data;
}

export function useUser(): UseUser {
  const queryClient = useQueryClient();
  const { data: user } = useQuery<any, unknown, UserWidthToken | null | undefined, string[]>(
    ['get-user'],
    ({ signal }) => getUser(user, signal),
    {
      initialData: getCookie(),
      onSuccess: (received: UserWidthToken | null | undefined) => {
        if (!received) {
          deleteCookie();
        } else {
          setCookie('creative-wallet', received);
        }
      },
    }
  );

  function updateUser(user: UserWidthToken) {
    queryClient.setQueryData(['get-user'], user);
  }

  function clearUser() {
    queryClient.setQueryData(['get-user'], null);
  }

  return { user, updateUser, clearUser };
}
