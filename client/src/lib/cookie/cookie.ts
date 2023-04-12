import { UserWidthToken } from '@/feature/auth/hooks/useUser';
import Cookies from 'universal-cookie';

interface CookieReturn {
  accessToken: string;
  id: number;
  userName: string;
}

const cookies = new Cookies();
export const setCookie = (name = 'creative-wallet', value: UserWidthToken | undefined | null) => {
  return cookies.set(name, value, { path: '/' });
};

export const getCookie = (name = 'creative-wallet'): CookieReturn | undefined => {
  return cookies.get(name);
};

export const deleteCookie = (name = 'creative-wallet') => {
  return cookies.remove(name, { path: '/' });
};
