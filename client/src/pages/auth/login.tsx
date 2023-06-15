import LoginTemplate from '@/feature/auth/components/templates/LoginTemplate';
import prefetchUserData from '@/feature/auth/hooks/prefetchUserData';
import { useAuth } from '@/feature/auth/hooks/useAuth';
import Layout from '@/layout/components/templates/Layout';
import { User } from '@/types/api/User';
import { GetServerSideProps } from 'next';
import React, { FormEvent } from 'react';
import { useInput } from '@/feature/auth/hooks/useInput';

export default function Login() {
  const auth = useAuth();

  const { ref: userNameRef, data: userName } = useInput();
  const { ref: pwRef, data: password, watch: pwWatch, setWatch: setPwWatch } = useInput();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userName && password) {
      const data: User = { userName, password };
      auth.login(data);
    }
  };

  return (
    <>
      <Layout>
        <LoginTemplate
          onSubmit={onSubmit}
          userNameRef={userNameRef}
          pwRef={pwRef}
          pwWatch={pwWatch}
          setPwWatch={setPwWatch}
        />
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return prefetchUserData(context);
};
