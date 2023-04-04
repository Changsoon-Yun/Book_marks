import { StyledMain } from '@/layout/StyledMain';
import WriteForm from '@/components/common/WriteForm';
import { WriteProps } from '@/pages/post/write';

export default function PostWriteTemplate(props: WriteProps) {
  const { onSubmit, titleRef, contentRef } = props;
  return (
    <StyledMain>
      <WriteForm onSubmit={onSubmit} titleRef={titleRef} contentRef={contentRef} />
    </StyledMain>
  );
}
