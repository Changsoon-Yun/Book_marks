import prefetchUserData from '@/feature/auth/hooks/prefetchUserData';
import { useUser } from '@/feature/auth/hooks/useUser';
import IndexTemplate from '@/feature/index/components/templates/IndexTemplate';
import Layout from '@/layout/components/templates/Layout';
import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Link } from '@chakra-ui/next-js';
import { Button } from '@chakra-ui/react';

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Layout>
        <IndexTemplate />
      </Layout>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return prefetchUserData(context);
};
