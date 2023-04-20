import { axiosInstance } from '@/lib/async/axiosInstance';
import { authAPI } from '@/lib/async/apiRoutes';
import { COOKIE_NAME, deleteCookie, setCookie } from '@/lib/cookie/cookie';
import { useQuery, useQueryClient } from 'react-query';

interface UseUser {
  user: UnKnownUserToken;
  updateUser: (user: UserWidthToken) => void;
  clearUser: () => void;
}

export interface UserWidthToken {
  id: number;
  userName: string;
  accessToken: string;
}

export type UnKnownUserToken = UserWidthToken | null | undefined;

export async function getUser(user: UnKnownUserToken): Promise<UnKnownUserToken> {
  if (!user) return null;
  const { data } = await axiosInstance.get(authAPI.getUser, {
    headers: { Authorization: `Bearer ${user.accessToken}` },
  });
  return data;
}

export function useUser(): UseUser {
  const queryClient = useQueryClient();
  const { data: userToken } = useQuery([authAPI.getUser], (): Promise<UnKnownUserToken> => getUser(userToken), {
    onSuccess: (received) => {
      if (!received) {
        deleteCookie();
      } else {
        setCookie(COOKIE_NAME, received);
      }
    },
  });

  function updateUser(user: UserWidthToken) {
    queryClient.setQueryData([authAPI.getUser], user);
  }

  function clearUser() {
    queryClient.setQueryData([authAPI.getUser], null);
  }

  return { user: userToken, updateUser, clearUser };
}
