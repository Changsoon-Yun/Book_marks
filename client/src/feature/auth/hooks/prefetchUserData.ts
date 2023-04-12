import { queryKeys } from '@/feature/auth/hooks/queryKey';
import { getUser, UserWidthToken } from '@/feature/auth/hooks/useUser';
import { COOKIE_NAME, setCookie } from '@/lib/cookie/cookie';
import { GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { dehydrate, QueryClient } from 'react-query';

const prefetchUserData = async (context: GetServerSidePropsContext, locales: string[]) => {
  const { locale = 'ko' } = context;
  const userData: UserWidthToken | null = context.req.cookies[COOKIE_NAME]
    ? JSON.parse(context.req.cookies[COOKIE_NAME])
    : null;

  if (!userData) {
    return {
      props: {
        ...(await serverSideTranslations(locale, locales)),
      },
    };
  }

  /**
   * 작동원리
   * 1. react-query의 프리페칭 쿼리키 활성화
   * 2. 활성화된 쿼리키로 Header컴포넌트의 useAuth 작동 => 쿠키세팅
   */
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(queryKeys.userData, () => getUser({ user: userData }));
  setCookie(COOKIE_NAME, userData);

  return {
    props: {
      ...(await serverSideTranslations(locale, locales)),
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default prefetchUserData;
