import Layout from '@/layout/components/templates/Layout';
import type { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <div>IndexPages</div>
      </Layout>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale = 'ko' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['header'])),
  },
});
