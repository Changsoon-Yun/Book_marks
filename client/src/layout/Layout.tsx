import Header from '@/layout/Header';
import React, { ReactNode } from 'react';

export default function Layout({ children, ...pageProps }: { children: ReactNode }) {
  return (
    <div>
      <Header {...pageProps} />
      {children}
    </div>
  );
}
