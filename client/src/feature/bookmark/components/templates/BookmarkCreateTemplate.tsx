import { WriteProps } from '@/pages/bookmark/create';
import { Button, FormControl, Input, Textarea } from '@chakra-ui/react';

export default function BookmarkCreateTemplate(props: WriteProps) {
  const { onSubmit, urlRef, contentRef } = props;
  return (
    <FormControl>
      <form onSubmit={onSubmit}>
        <Input ref={urlRef} placeholder='url' size='sm' />
        <Textarea ref={contentRef} placeholder='Here is a sample placeholder' />
        <Button type={'submit'}>Submit</Button>
      </form>
    </FormControl>
  );
}
