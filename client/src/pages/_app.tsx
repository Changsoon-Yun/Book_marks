import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/axios/queryClient";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}
