import type { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";
import { QueryClientProvider } from "react-query";
import { BottomNav, Header, InnerLayout, Layout } from "../layout";
import { queryClient } from "@/lib/axios/queryClient";
import "@/asset/styles/globals.css";
import "@/asset/styles/fonts";
import React from "react";
import { RecoilRoot } from "recoil";
import Snackbar from "@/layout/Snackbar";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <CssBaseline />
          <Layout>
            <Header />
            <InnerLayout>
              <Snackbar />
              <Component {...pageProps} />
            </InnerLayout>
            <BottomNav />
          </Layout>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}
