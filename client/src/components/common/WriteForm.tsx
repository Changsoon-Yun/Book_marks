import { Button, FormGroup, TextField } from '@mui/material';
import { WriteProps } from '@/pages/post/write';

export default function WriteForm(props: WriteProps) {
  const { onSubmit, titleRef, contentRef } = props;
  return (
    <form onSubmit={onSubmit}>
      <FormGroup sx={{ gap: '20px' }}>
        <TextField label="Title" ref={titleRef} />
        <TextField label="Content" multiline rows={10} placeholder={'Write Something'} ref={contentRef} />
        <Button type={'submit'} variant={'contained'}>
          Submit
        </Button>
      </FormGroup>
    </form>
  );
}
