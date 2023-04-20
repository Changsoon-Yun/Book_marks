import '../../public/asset/styles/globals.css';
import { config } from '@/lib/async/queryClient';
//import { queryClient } from '@/lib/axios/queryClient';
import { ChakraProvider } from '@chakra-ui/react';
import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import React from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;

  const [queryClient] = React.useState(() => new QueryClient(config));

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ChakraProvider>
            <Component {...pageProps} />
            <ReactQueryDevtools />
          </ChakraProvider>
        </Hydrate>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default appWithTranslation(MyApp);
