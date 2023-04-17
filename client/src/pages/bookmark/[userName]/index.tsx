import prefetchUserData from '@/feature/auth/hooks/prefetchUserData';
import BookmarkUserTemplate from '@/feature/bookmark/BookmarkUserTemplate';
import Layout from '@/layout/components/templates/Layout';
import { GetServerSideProps } from 'next';
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { PageProps } from '@/types/props/PageProps';

export default function BookmarkUser(props: PageProps) {
  const { slugName } = props;
  return (
    <>
      <Head>
        <title>{slugName + "'s bookmark"}</title>
      </Head>
      <Layout>
        <BookmarkUserTemplate />
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const slugName = query.userName;
  return prefetchUserData(context, slugName);
};
