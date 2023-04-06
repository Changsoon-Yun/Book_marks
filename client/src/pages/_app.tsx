import Layout from '@/layout/Layout';
import { queryClient } from '@/lib/axios/queryClient';
import App from 'next/app';
import React from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';

export default class RootApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
            <ReactQueryDevtools />
          </QueryClientProvider>
        </RecoilRoot>
      </>
    );
  }
}
