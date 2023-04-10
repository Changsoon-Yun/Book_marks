import { useUser } from '@/feature/auth/hooks/useUser';
import { useCreatePost, UserInput } from '@/feature/post/hooks/useCreatePost';
import PostWriteTemplate from '@/feature/post/PostWriteTemplate';
import { FormEvent, MutableRefObject, useRef } from 'react';

export interface WriteProps {
  titleRef: MutableRefObject<HTMLInputElement | null>;
  contentRef: MutableRefObject<HTMLTextAreaElement | null>;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export default function Write() {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const { user } = useUser();
  const { createPost } = useCreatePost();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) return alert('로그인이 필요합니다 !');

    if (titleRef.current && contentRef.current) {
      const data: UserInput = {
        title: titleRef.current.value,
        content: contentRef.current.value,
      };
      createPost(data);
    }
  };
  return <PostWriteTemplate titleRef={titleRef} contentRef={contentRef} onSubmit={onSubmit} />;
}
