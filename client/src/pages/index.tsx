import Layout from '@/layout/components/templates/Layout';
import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import axios from 'axios';

const Home: NextPage = (props) => {
  return (
    <>
      <Layout>
        <div>IndexPages</div>
      </Layout>
    </>
  );
};

export default Home;

// TODO: getServerSideProps 리턴타입 확인해야됌
export const getServerSideProps: GetServerSideProps<{ cookie: string | null }> = async (context) => {
  const { locale = 'ko' } = context;
  const cookie = context.req.cookies['bookmark'] ?? null;
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ['header'])),
      cookie,
    },
  };
};
