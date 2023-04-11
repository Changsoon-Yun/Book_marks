import { queryClient } from '@/lib/axios/queryClient';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';
import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <Component {...pageProps} />
          <ReactQueryDevtools />
        </ChakraProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default appWithTranslation(MyApp);

export const getStaticProps: GetStaticProps = async ({ locale = 'ko' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['header'])),
  },
});
