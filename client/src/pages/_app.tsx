import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { QueryClientProvider } from 'react-query';
import { Header, Loading } from '@/components/common';
import { queryClient } from '@/axios/queryClient';
import { SSRProvider } from 'react-bootstrap';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <QueryClientProvider client={queryClient}>
        <NextUIProvider>
          <Header />
          <Loading />
          <Component {...pageProps} />
        </NextUIProvider>
      </QueryClientProvider>
    </SSRProvider>
  );
}
