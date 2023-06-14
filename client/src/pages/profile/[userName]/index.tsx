import prefetchUserData from '@/feature/auth/hooks/prefetchUserData';
import Layout from '@/layout/components/templates/Layout';
import { GetServerSideProps } from 'next';
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { PageProps } from '@/types/props/PageProps';
import ProfileUserTemplate from '@/feature/profile/components/templates/ProfileUserTemplate';

export default function ProfileUser(props: PageProps) {
  const { slugName } = props;
  const { push } = useRouter();
  if (slugName === undefined) {
    push('/');
    return <></>;
  }
  return (
    <>
      <Head>
        <title>{slugName + "'s Profile"}</title>
      </Head>
      <Layout>
        <ProfileUserTemplate />
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const slugName = query.userName;
  return prefetchUserData(context, slugName);
};
