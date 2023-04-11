import BookmarkEditTemplate from '@/feature/bookmark/BookmarkEditTemplate';
import Header from '@/layout/Header';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Edit() {
  return (
    <>
      <Header />
      <BookmarkEditTemplate />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale = 'ko' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['header'])),
  },
});
