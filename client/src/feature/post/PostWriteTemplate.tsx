import { WriteProps } from '@/pages/post/write';
import { Button, Input, Textarea, FormControl } from '@chakra-ui/react';

export default function PostWriteTemplate(props: WriteProps) {
  const { onSubmit, titleRef, contentRef } = props;
  return (
    <FormControl>
      <form onSubmit={onSubmit}>
        <Input ref={titleRef} placeholder='url' size='sm' />
        <Textarea ref={contentRef} placeholder='Here is a sample placeholder' />
        <Button type={'submit'}>Submit</Button>
      </form>
    </FormControl>
  );
}
