import prefetchUserData from '@/feature/auth/hooks/prefetchUserData';
import Layout from '@/layout/components/templates/Layout';
import { GetServerSideProps } from 'next';
import React from 'react';

export default function Account() {
  return (
    <>
      <Layout>아이디 찾기입니다</Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return prefetchUserData(context);
};
