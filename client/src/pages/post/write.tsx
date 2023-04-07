import { useUser } from '@/feature/auth/hooks/useUser';
import { useCreatePost, UserInput } from '@/feature/post/hooks/useCreatePost';
import PostWriteTemplate from '@/feature/post/PostWriteTemplate';
import { FormEvent, MutableRefObject, useRef } from 'react';

export interface WriteProps {
  titleRef: MutableRefObject<HTMLDivElement | null>;
  contentRef: MutableRefObject<HTMLDivElement | null>;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export default function Write() {
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { user } = useUser();
  const { createPost } = useCreatePost();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) return alert('로그인이 필요합니다 !');

    if (titleRef && contentRef) {
      const titleInput = titleRef.current?.childNodes[1].childNodes[0] as HTMLInputElement;
      const contentInput = contentRef.current?.childNodes[1].childNodes[0] as HTMLInputElement;

      const data: UserInput = {
        title: titleInput.value,
        content: contentInput.value,
      };

      createPost(data);
    }
  };
  return <PostWriteTemplate titleRef={titleRef} contentRef={contentRef} onSubmit={onSubmit} />;
}
