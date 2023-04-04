import PostWriteTemplate from "@/components/post/PostWriteTemplate";
import { FormEvent, MutableRefObject, useRef } from "react";

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
      const currentInput = contentRef.current?.childNodes[1]
        .childNodes[0] as HTMLInputElement;
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
