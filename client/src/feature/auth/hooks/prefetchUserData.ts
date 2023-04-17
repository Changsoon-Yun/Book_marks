import { getUser, UserWidthToken } from '@/feature/auth/hooks/useUser';
import { authAPI } from '@/lib/async/apiRoutes';
import { COOKIE_NAME } from '@/lib/cookie/cookie';
import { GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { dehydrate, QueryClient } from 'react-query';

/**
 * @param context GetServerSidePropsContext
 * @param slugName slugName
 */
const prefetchUserData = async (context: GetServerSidePropsContext, slugName?: string | string[] | undefined) => {
  const { locale = 'ko' } = context;
  const userData: UserWidthToken | null = context.req.cookies[COOKIE_NAME]
    ? JSON.parse(context.req.cookies[COOKIE_NAME])
    : null;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([authAPI.getUser], () => getUser(userData));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      ...(await serverSideTranslations(locale, ['common'])),
      slugName,
    },
  };
};

export default prefetchUserData;
