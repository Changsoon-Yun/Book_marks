import App from 'next/app';
import { CssBaseline } from '@mui/material';
import { QueryClientProvider } from 'react-query';
import { Layout } from '../layout';
import { queryClient } from '@/lib/axios/queryClient';
import '@/asset/styles/globals.css';
import '@/asset/styles/fonts';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { ReactQueryDevtools } from 'react-query/devtools';

export default class RootApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            <CssBaseline />
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
