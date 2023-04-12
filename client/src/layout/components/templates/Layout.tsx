import Footer from '@/layout/components/templates/Footer';
import Header from '@/layout/components/templates/Header';
import { Container, Flex } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { getCookie } from '@/lib/cookie/cookie';

export async function getServerSideProps(store) {
  const accessToken = getCookie('creative-wallet');
  console.log(store);
  return {
    props: {
      accessToken,
    },
  };
}
export default function Layout({ children, accessToken }: { children: ReactNode; accessToken: string | undefined }) {
  return (
    <>
      <Flex direction={'column'} h={'100%'}>
        <Header accessToken={accessToken} />
        <Container maxW={'8xl'} minH={'0'} flex={1} overflow={'auto'}>
          {children}
        </Container>
        <Footer />
      </Flex>
    </>
  );
}
