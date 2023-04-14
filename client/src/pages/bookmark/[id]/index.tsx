import prefetchUserData from '@/feature/auth/hooks/prefetchUserData';
import BookmarkItemTemplate from '@/feature/bookmark/BookmarkItemTemplate';
import Layout from '@/layout/components/templates/Layout';
import { GetServerSideProps } from 'next';
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  return prefetchUserData(context);
};
