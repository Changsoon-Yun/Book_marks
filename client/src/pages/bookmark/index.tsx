import BookmarkTemplate from '@/feature/bookmark/BookmarkTemplate';
import { useGetBookmarks } from '@/feature/bookmark/hooks/useGetBookmarks';
import Layout from '@/layout/components/templates/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { GetServerSideProps } from 'next';

export default function Post() {
  const { data: bookmarks } = useGetBookmarks();
  return (
    <>
      <Layout>
        <BookmarkTemplate bookmarks={bookmarks} />
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
