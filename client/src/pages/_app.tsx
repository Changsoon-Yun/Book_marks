import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
}
