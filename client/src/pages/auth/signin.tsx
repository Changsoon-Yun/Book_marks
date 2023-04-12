import { useAuth } from '@/feature/auth/hooks/useAuth';
import SigninTemplate from '@/feature/auth/components/templates/SigninTemplate';
import Layout from '@/layout/components/templates/Layout';
import { User } from '@/types/User';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { FormEvent, useRef } from 'react';
import { useBoolean } from '@chakra-ui/hooks';
import { useToast } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { AuthProps, ConfirmPassword } from '@/feature/auth/interface/AuthProps';

export interface SigninProps extends ConfirmPassword, AuthProps {}

export default function Signin() {
  const auth = useAuth();
  const { t } = useTranslation('auth');
  const toast = useToast();

  const [pwWatch, setPwWatch] = useBoolean(false);
  const [pwConfirmWatch, setPwConfirmWatch] = useBoolean(false);

  const userNameRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);
  const pwConfirmRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userName = userNameRef.current?.value;
    const password = pwRef.current?.value;
    const confirmPassword = pwConfirmRef.current?.value;
    if (password !== confirmPassword) {
      toast({ title: t('password-not-matched'), status: 'warning', isClosable: true });
      return;
    }

    if (userName && password) {
      const data: User = { userName, password };
      auth.signin(data);
    }
  };
  return (
    <>
      <Layout>
        <SigninTemplate
          onSubmit={onSubmit}
          userNameRef={userNameRef}
          pwRef={pwRef}
          pwWatch={pwWatch}
          pwConfirmRef={pwConfirmRef}
          setPwWatch={setPwWatch}
          pwConfirmWatch={pwConfirmWatch}
          setPwConfirmWatch={setPwConfirmWatch}
        />
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale = 'ko' } = context;
  const cookie = context.req.cookies['bookmark'] ?? null;
  return {
    props: {
      ...(await serverSideTranslations(locale, ['header'])),
      cookie,
    },
  };
};
