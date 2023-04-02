import type {AppProps} from "next/app";
import {CssBaseline} from "@mui/material";
import {QueryClientProvider} from "react-query";
import {BottomNav, Header, InnerLayout, Layout} from "@/components/share";
import {queryClient} from "@/axios/queryClient";
import "@/styles/globals.css";
import "@/styles/fonts";
import React from "react";
import {RecoilRoot} from 'recoil';
import Snackbar from "@/components/share/Snackbar";

export default function App(props: AppProps) {
  const {Component, pageProps} = props;
  return (
    <>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <CssBaseline/>
          <Layout>
            <Header/>
            <InnerLayout>
              <Snackbar/>
              <Component {...pageProps} />
            </InnerLayout>
            <BottomNav/>
          </Layout>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}
