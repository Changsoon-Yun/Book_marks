import type {AppProps} from "next/app";
import {CssBaseline} from "@mui/material";
import {QueryClientProvider} from "react-query";
import {BottomNav, Header, InnerLayout, Layout} from "@/components/share";
import {queryClient} from "@/axios/queryClient";
import "@/styles/globals.css";
import "@/styles/fonts";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "@/dev";

export default function App(props: AppProps) {
  const {Component, pageProps} = props;
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CssBaseline/>
        <Layout>
          <Header/>
          <InnerLayout>
            <DevSupport
              ComponentPreviews={ComponentPreviews}
              useInitialHook={useInitial}
            >
              <Component {...pageProps} />
            </DevSupport>
          </InnerLayout>
          <BottomNav/>
        </Layout>
      </QueryClientProvider>
    </>
  );
}
