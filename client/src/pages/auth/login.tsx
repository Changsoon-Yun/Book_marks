import { useAuth } from '@/feature/auth/hooks/useAuth';
import LoginTemplate from '@/feature/auth/components/templates/LoginTemplate';
import Layout from '@/layout/components/templates/Layout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { FormEvent, useRef } from 'react';
import { useBoolean } from '@chakra-ui/hooks';
import { User } from '@/types/User';

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

export const getStaticProps: GetStaticProps = async ({ locale = 'ko' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['header', 'auth'])),
  },
});
