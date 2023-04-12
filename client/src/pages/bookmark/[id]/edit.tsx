import BookmarkEditTemplate from '@/feature/bookmark/BookmarkEditTemplate';
import Layout from '@/layout/components/templates/Layout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Edit() {
  return (
    <>
      <Layout>
        <BookmarkEditTemplate />
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale = 'ko' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['header'])),
  },
});
