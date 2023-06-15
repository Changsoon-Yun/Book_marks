import prefetchUserData from '@/feature/auth/hooks/prefetchUserData';
import Layout from '@/layout/components/templates/Layout';
import { GetServerSideProps } from 'next';
import React from 'react';
import { useInput } from '@/feature/auth/hooks/useInput';
import FindPwTemplate from '@/feature/auth/components/templates/FindPwTemplate';

export default function Password() {
  const { ref: emailRef } = useInput();
  const onSubmit = () => {
    return;
  };

  return (
    <>
      <Layout>
        <FindPwTemplate onSubmit={onSubmit} emailRef={emailRef} />
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return prefetchUserData(context);
};
