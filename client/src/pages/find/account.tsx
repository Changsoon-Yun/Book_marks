import Layout from '@/layout/components/templates/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

export default function Account() {
  return (
    <>
      <Layout>아이디 찾기입니다</Layout>
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
