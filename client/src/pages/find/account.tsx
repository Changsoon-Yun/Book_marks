import prefetchUserData from '@/feature/auth/hooks/prefetchUserData';
import Layout from '@/layout/components/templates/Layout';
import { GetServerSideProps } from 'next';
import React from 'react';
import FindIdTemplate from '@/feature/auth/components/templates/FindIdTemplate';
import { useInput } from '@/feature/auth/hooks/useInput';

export default function Account() {
  const { ref: emailRef } = useInput();
  const onSubmit = () => {
    return;
  };

  return (
    <>
      <Layout>
        <FindIdTemplate onSubmit={onSubmit} emailRef={emailRef} />
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return prefetchUserData(context);
};
