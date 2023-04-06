import App from 'next/app';
import {QueryClientProvider} from 'react-query';
import {queryClient} from '@/lib/axios/queryClient';

import React from 'react';
import {RecoilRoot} from 'recoil';
import {ReactQueryDevtools} from 'react-query/devtools';
import Layout from "@/layout/Layout";

export default class RootApp extends App {
  render() {
    const {Component, pageProps} = this.props;

    console.log('hello')






















    console.log("hello2")
    return (
      <>
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
            <ReactQueryDevtools/>
          </QueryClientProvider>
        </RecoilRoot>
      </>
    );
  }
}
