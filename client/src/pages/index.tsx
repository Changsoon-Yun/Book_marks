import type { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Header from '@/layout/Header';
import React from 'react';

const Home: NextPage = (props) => {
  const { t } = useTranslation('header');
  return (
    <>
      <Header />
      {t('signin')}
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale = 'ko' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['header'])),
  },
});
