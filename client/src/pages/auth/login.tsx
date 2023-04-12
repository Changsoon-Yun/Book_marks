import { useAuth } from '@/feature/auth/hooks/useAuth';
import LoginTemplate from '@/feature/auth/login/LoginTemplate';
import Layout from '@/layout/components/templates/Layout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { FormEvent, SetStateAction, useState } from 'react';
import { useBoolean } from '@chakra-ui/hooks';

export interface LoginProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  setPassword: React.Dispatch<SetStateAction<string>>;
  setUserName: React.Dispatch<SetStateAction<string>>;
  pwWatch: boolean;
  setPwWatch: { toggle: () => void };
}

export default function Login() {
  const auth = useAuth();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [pwWatch, setPwWatch] = useBoolean(false);
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { userName, password };
    await auth.login(data);
  };

  return (
    <>
      <Layout>
        <LoginTemplate
          onSubmit={onSubmit}
          setUserName={setUserName}
          setPassword={setPassword}
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
