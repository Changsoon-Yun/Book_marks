import LoginTemplate from '@/feature/auth/components/templates/LoginTemplate';
import prefetchUserData from '@/feature/auth/hooks/prefetchUserData';
import { useAuth } from '@/feature/auth/hooks/useAuth';
import Layout from '@/layout/components/templates/Layout';
import { User } from '@/types/api/User';
import { useBoolean } from '@chakra-ui/hooks';
import { GetServerSideProps } from 'next';
import React, { FormEvent, useRef } from 'react';

export default function Login() {
  const auth = useAuth();
  const [pwWatch, setPwWatch] = useBoolean(false);

  const userNameRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userName = userNameRef.current?.value;
    const password = pwRef.current?.value;

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
