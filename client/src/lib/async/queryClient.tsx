import { COOKIE_NAME, getCookie } from '@/lib/cookie/cookie';
import { createStandaloneToast } from '@chakra-ui/react';
import { MutationCache, QueryCache, QueryClientConfig } from 'react-query';

export const getJWTHeader = () => {
  const accessToken = getCookie(COOKIE_NAME);
  return {
    Authorization: `Bearer ${accessToken.accessToken}`,
  };
};

const { toast } = createStandaloneToast();

function queryErrorHandler(error: unknown) {
  const title = error instanceof Error ? error.message : 'error connecting to server';
  return toast({ title, status: 'error', variant: 'subtle', isClosable: true });
}

export const config: QueryClientConfig = {
  queryCache: new QueryCache({
    onError: queryErrorHandler,
  }),
  mutationCache: new MutationCache({
    onError: queryErrorHandler,
  }),
  defaultOptions: {
    queries: {
      // staleTime: 1000 * 20, // 10min
      // cacheTime: 1000 * 30, // 15min,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
    },
  },
};
