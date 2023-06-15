import SignupTemplate from '@/feature/auth/components/templates/SignupTemplate';
import prefetchUserData from '@/feature/auth/hooks/prefetchUserData';
import { useAuth } from '@/feature/auth/hooks/useAuth';
import { AuthProps, ConfirmPassword } from '@/types/props/AuthProps';
import Layout from '@/layout/components/templates/Layout';
import { User } from '@/types/api/User';
import { useBoolean } from '@chakra-ui/hooks';
import { useToast } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';
import React, { FormEvent, useRef } from 'react';
import { useInput } from '@/feature/auth/hooks/useInput';

export interface signupProps extends ConfirmPassword, AuthProps {}

export default function Signup() {
  const auth = useAuth();
  const { t } = useTranslation('common');
  const toast = useToast();

  const { ref: userNameRef, data: userName } = useInput();
  const { ref: emailRef, data: email } = useInput();
  const { ref: pwRef, data: password, watch: pwWatch, setWatch: setPwWatch } = useInput();
  const { ref: pwConfirmRef, data: confirmPassword, watch: pwConfirmWatch, setWatch: setPwConfirmWatch } = useInput();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast({ title: t('password-not-matched'), status: 'warning', isClosable: true });
      return;
    }

    if (email && userName && password) {
      const data: User = { email, userName, password };
      auth.signup(data);
    }
  };
  return (
    <>
      <Layout>
        <SignupTemplate
          onSubmit={onSubmit}
          emailRef={emailRef}
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
  return prefetchUserData(context);
};
