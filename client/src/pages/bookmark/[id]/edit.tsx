import BookmarkEditTemplate from '@/feature/bookmark/BookmarkEditTemplate';
import Layout from '@/layout/components/templates/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';

export default function Edit() {
  return (
    <>
      <Layout>
        <BookmarkEditTemplate />
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
