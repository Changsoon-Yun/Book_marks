import { PostProps } from '@/pages/post';
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import { Post } from '@/types/Post';

export default function PostTemplate(props: PostProps) {
  const { data } = props;
  return (
    <Grid container rowSpacing={2} columnSpacing={2} sx={{ height: '100%', overflow: 'auto' }}>
      {data?.map(({ id, authorId, title, content, created_at, published }) => (
        <Grid item key={id}>
          <Cards
            id={id}
            authorId={authorId}
            title={title}
            content={content}
            created_at={created_at}
            published={published}
          />
        </Grid>
      ))}
    </Grid>
  );
}

const Cards = ({ id, authorId, title, content, created_at, published }: Post) => {
  return (
    <Card sx={{ border: '1px solid black' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="div">
          {content}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {String(created_at)}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button size="small">See More</Button>
      </CardActions>
    </Card>
  );
};
