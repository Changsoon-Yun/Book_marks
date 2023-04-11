import BookmarkItemTemplate from '@/feature/bookmark/BookmarkItemTemplate';
import Layout from '@/layout/Layout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

export default function PostItem() {
  return (
    <>
      <Layout>
        <BookmarkItemTemplate />
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale = 'ko' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['header'])),
  },
});
