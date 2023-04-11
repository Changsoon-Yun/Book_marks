import Footer from '@/layout/Footer';
import Header from '@/layout/Header';
import { Container, Flex } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Flex direction={'column'} minH={'100vh'} h={'100%'}>
        <Header />
        <Container maxW={'8xl'} h={'100%'} flex={1}>
          {children}
        </Container>
        <Footer />
      </Flex>
    </>
  );
}
