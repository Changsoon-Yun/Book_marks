import prefetchUserData from '@/feature/auth/hooks/prefetchUserData';
import BookmarkTemplate from '@/feature/bookmark/BookmarkTemplate';
import { useGetBookmarks } from '@/feature/bookmark/hooks/useGetBookmarks';
import Layout from '@/layout/components/templates/Layout';
import { GetServerSideProps } from 'next';
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  return prefetchUserData(context, ['common']);
};
