import Header from '@/layout/Header';
import { Container, theme } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Container maxW={theme.sizes.container.lg}>
      <Header />
      {children}
    </Container>
  );
}
