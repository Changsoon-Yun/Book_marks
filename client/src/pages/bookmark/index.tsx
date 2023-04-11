import { useGetBookmarks } from '@/feature/bookmark/hooks/useGetBookmarks';
import BookmarkTemplate from '@/feature/bookmark/BookmarkTemplate';
import Header from '@/layout/Header';
import React from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Post() {
  const { data: bookmarks } = useGetBookmarks();
  return (
    <>
      <Header />
      <BookmarkTemplate bookmarks={bookmarks} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale = 'ko' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['header'])),
  },
});
