import { useUser } from '@/feature/auth/hooks/useUser';
import { useCreateBookmark, UserInput } from '@/feature/bookmark/hooks/useCreateBookmark';
import BookmarkCreateTemplate from '@/feature/bookmark/BookmarkCreateTemplate';
import { FormEvent, MutableRefObject, useRef } from 'react';
import Header from '@/layout/Header';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

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
      <Header />
      <BookmarkCreateTemplate urlRef={urlRef} contentRef={contentRef} onSubmit={onSubmit} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale = 'ko' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['header'])),
  },
});
