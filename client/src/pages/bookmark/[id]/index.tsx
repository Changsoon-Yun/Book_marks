import BookmarkItemTemplate from '@/feature/bookmark/BookmarkItemTemplate';
import Layout from '@/layout/components/templates/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { GetServerSideProps } from 'next';

export default function PostItem() {
  return (
    <>
      <Layout>
        <BookmarkItemTemplate />
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
