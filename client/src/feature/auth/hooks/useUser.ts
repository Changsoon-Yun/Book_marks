//@ts-nocheck
//TODO: tscheck해야됌

import { queryKeys } from '@/feature/auth/hooks/queryKey';
import { axiosInstance } from '@/lib/axios';
import { COOKIE_NAME, deleteCookie, getCookie, setCookie } from '@/lib/cookie/cookie';
import { useQuery, useQueryClient } from 'react-query';

interface UseUser {
  user: UserWidthToken;
  updateUser: (user: UserWidthToken) => void;
  clearUser: () => void;
}

export interface UserWidthToken {
  id: number;
  userName: string;
  accessToken: string;
}

export async function getUser({ user, signal }: { user: UserWidthToken; signal?: AbortSignal }) {
  if (!user) return null;
  const { data } = await axiosInstance.get(`/auth/get-user/${user.id}`, {
    headers: { Authorization: `Bearer ${user.accessToken}` },
    signal,
  });
  return data;
}

export function useUser() {
  const queryClient = useQueryClient();
  const { data: user } = useQuery(queryKeys.userData, ({ signal }) => getUser({ user, signal }), {
    initialData: getCookie(),
    onSuccess: (received) => {
      if (!received) {
        deleteCookie();
      } else {
        setCookie(COOKIE_NAME, received);
      }
    },
  });

  function updateUser(user: UserWidthToken) {
    queryClient.setQueryData(queryKeys.userData, user);
  }

  function clearUser() {
    queryClient.setQueryData(queryKeys.userData, null);
  }

  return { user, updateUser, clearUser };
}
