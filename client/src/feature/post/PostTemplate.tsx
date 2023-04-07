import { Post } from '@/types/Post';

export default function PostTemplate(props: { posts: Post[] }) {
  const { posts } = props;
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>{JSON.stringify(post)}</div>
      ))}
    </div>
  );
}
