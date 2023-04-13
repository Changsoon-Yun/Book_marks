import { queryKeys } from '@/feature/auth/hooks/queryKey';
import { getUser, UserWidthToken } from '@/feature/auth/hooks/useUser';
import { COOKIE_NAME } from '@/lib/cookie/cookie';
import { GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { dehydrate, QueryClient } from 'react-query';

const prefetchUserData = async (context: GetServerSidePropsContext, locales: string[]) => {
  const { locale = 'ko' } = context;
  const userData: UserWidthToken | null = context.req.cookies[COOKIE_NAME]
    ? JSON.parse(context.req.cookies[COOKIE_NAME])
    : null;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(queryKeys.userData, () => getUser(userData));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      ...(await serverSideTranslations(locale, locales)),
    },
  };
};

export default prefetchUserData;
