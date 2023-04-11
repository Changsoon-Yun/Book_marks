import { getCookie } from '@/lib/cookie/cookie';
import { MutationCache, QueryCache, QueryClient, QueryClientConfig } from 'react-query';
import { createStandaloneToast } from '@chakra-ui/react';

export const getJWTHeader = () => {
  const accessToken = getCookie('creative-wallet').accessToken;
  return {
    Authorization: `Bearer ${accessToken}`,
  };
};
const { toast } = createStandaloneToast();
function queryErrorHandler(error: unknown) {
  // const [snack, setSnack] = useRecoilState(snackbarAtom);
  // error is type unknown because in js, anything can be an error (e.g. throw(5))
  const title = error instanceof Error ? error.message : 'error connecting to server';

  return toast({ title, status: 'error', variant: 'subtle', isClosable: true });
}

const config: QueryClientConfig = {
  queryCache: new QueryCache({
    onError: queryErrorHandler,
  }),
  mutationCache: new MutationCache({
    onError: queryErrorHandler,
  }),
  defaultOptions: {
    queries: {
      // staleTime: 600000, // 10min
      // cacheTime: 900000, // 15min,
    },
  },
};

// to satisfy typescript until this file has uncommented contents
export const queryClient = new QueryClient(config);
