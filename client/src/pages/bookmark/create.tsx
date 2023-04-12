import { useUser } from '@/feature/auth/hooks/useUser';
import BookmarkCreateTemplate from '@/feature/bookmark/BookmarkCreateTemplate';
import { useCreateBookmark, UserInput } from '@/feature/bookmark/hooks/useCreateBookmark';
import Layout from '@/layout/components/templates/Layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FormEvent, MutableRefObject, useRef } from 'react';
import { GetServerSideProps } from 'next';

export interface WriteProps {
  urlRef: MutableRefObject<HTMLInputElement | null>;
  contentRef: MutableRefObject<HTMLTextAreaElement | null>;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export default function Create() {
  const urlRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const { user } = useUser();
  const { createBookmark } = useCreateBookmark();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user) return alert('로그인이 필요합니다 !');

    if (urlRef.current && contentRef.current) {
      const data: UserInput = {
        url: urlRef.current.value,
        content: contentRef.current.value,
      };
      createBookmark(data);
    }
  };
  return (
    <>
      <Layout>
        <BookmarkCreateTemplate urlRef={urlRef} contentRef={contentRef} onSubmit={onSubmit} />
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
