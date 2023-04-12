import BookmarkTemplate from '@/feature/bookmark/BookmarkTemplate';
import { useGetBookmarks } from '@/feature/bookmark/hooks/useGetBookmarks';
import Layout from '@/layout/components/templates/Layout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

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

export const getStaticProps: GetStaticProps = async ({ locale = 'ko' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['header'])),
  },
});
