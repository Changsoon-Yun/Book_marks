import PostWriteTemplate from "@/components/post/PostWriteTemplate";
import { FormEvent, MutableRefObject, useRef } from "react";
import { createPost, UserInput } from "@/components/post/hooks/usePost";

export interface WriteProps {
  titleRef: MutableRefObject<HTMLDivElement | null>;
  contentRef: MutableRefObject<HTMLDivElement | null>;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}
export default function Write() {
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (titleRef && contentRef) {
      const titleInput = titleRef.current?.childNodes[1]
        .childNodes[0] as HTMLInputElement;
      const contentInput = contentRef.current?.childNodes[1]
        .childNodes[0] as HTMLInputElement;

      const data: UserInput = {
        title: titleInput.value,
        content: contentInput.value,
      };
      createPost(data);
    }
  };
  return (
    <PostWriteTemplate
      titleRef={titleRef}
      contentRef={contentRef}
      onSubmit={onSubmit}
    />
  );
}
