import Footer from '@/layout/components/templates/Footer';
import Header from '@/layout/components/templates/Header';
import { Container, Flex } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Flex direction={'column'} h={'100%'}>
        <Header />
        <Container maxW={'8xl'} flex={1} overflow={{ base: 'auto', md: 'visible' }}>
          {children}
        </Container>
        <Footer />
      </Flex>
    </>
  );
}
