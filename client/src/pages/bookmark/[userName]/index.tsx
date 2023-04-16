import prefetchUserData from '@/feature/auth/hooks/prefetchUserData';
import BookmarkUserTemplate from '@/feature/bookmark/BookmarkUserTemplate';
import Layout from '@/layout/components/templates/Layout';
import { GetServerSideProps } from 'next';
import React from 'react';

export default function BookmarkUser() {
  return (
    <>
      <Layout>
        <BookmarkUserTemplate />
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return prefetchUserData(context);
};
