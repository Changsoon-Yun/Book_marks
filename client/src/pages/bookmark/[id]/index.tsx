import BookmarkItemTemplate from '@/feature/bookmark/BookmarkItemTemplate';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from '@/layout/Header';

export default function PostItem() {
  return (
    <>
      <Header />
      <BookmarkItemTemplate />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale = 'ko' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['header'])),
  },
});
