import { useAuth } from '@/feature/auth/hooks/useAuth';
import SigninTemplate from '@/feature/auth/signin/SigninTemplate';
import Layout from '@/layout/Layout';
import { User } from '@/types/User';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { FormEvent, SetStateAction, useState } from 'react';

export interface SigninProps {
  psType: boolean;
  psTypeHandler: React.MouseEventHandler<HTMLDivElement>;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  setPassword: React.Dispatch<SetStateAction<string>>;
  setEmail: React.Dispatch<SetStateAction<string>>;
}

export default function Signin() {
  const auth = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [psType, setPsType] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: User = { email, password };
    auth.signin(data);
  };
  const psTypeHandler = () => {
    setPsType(!psType);
  };
  return (
    <>
      <Layout>
        <SigninTemplate
          onSubmit={onSubmit}
          psType={psType}
          psTypeHandler={psTypeHandler}
          setEmail={setEmail}
          setPassword={setPassword}
        />
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale = 'ko' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['header'])),
  },
});
