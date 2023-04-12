import Footer from '@/layout/components/templates/Footer';
import Header from '@/layout/components/templates/Header';
import { Container, Flex } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Flex direction={'column'} h={'100%'}>
        <Header />
        <Container maxW={'8xl'} minH={'0'} flex={1} overflow={'auto'}>
          {children}
        </Container>
        <Footer />
      </Flex>
    </>
  );
}
