import prefetchUserData from '@/feature/auth/hooks/prefetchUserData';
import BookmarkEditTemplate from '@/feature/bookmark/BookmarkEditTemplate';
import Layout from '@/layout/components/templates/Layout';
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
  return prefetchUserData(context, ['common']);
};
