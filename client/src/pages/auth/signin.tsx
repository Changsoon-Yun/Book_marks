import { useAuth } from '@/feature/auth/hooks/useAuth';
import SigninTemplate from '@/feature/auth/signin/SigninTemplate';
import Layout from '@/layout/components/templates/Layout';
import { User } from '@/types/User';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { FormEvent, SetStateAction, useState } from 'react';
import { useBoolean } from '@chakra-ui/hooks';

export interface SigninProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  setPassword: React.Dispatch<SetStateAction<string>>;
  setUserName: React.Dispatch<SetStateAction<string>>;
  pwWatch: boolean;
  setPwWatch: { toggle: () => void };
  pwConfirmWatch: boolean;
  setPwConfirmWatch: { toggle: () => void };
}

export default function Signin() {
  const auth = useAuth();
  const [pwWatch, setPwWatch] = useBoolean(false);
  const [pwConfirmWatch, setPwConfirmWatch] = useBoolean(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: User = { userName, password };
    auth.signin(data);
  };
  return (
    <>
      <Layout>
        <SigninTemplate
          onSubmit={onSubmit}
          setUserName={setUserName}
          setPassword={setPassword}
          pwWatch={pwWatch}
          setPwWatch={setPwWatch}
          pwConfirmWatch={pwConfirmWatch}
          setPwConfirmWatch={setPwConfirmWatch}
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
