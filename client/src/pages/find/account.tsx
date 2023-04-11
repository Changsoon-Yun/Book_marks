import Layout from '@/layout/Layout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

export default function Account() {
  return (
    <>
      <Layout>아이디 찾기입니다</Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale = 'ko' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['header'])),
  },
});
