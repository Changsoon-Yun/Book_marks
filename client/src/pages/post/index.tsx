import PostTemplate from "@/components/post/PostTemplate";
import { useGetPosts } from "@/components/post/hooks/useGetPosts";
import { Post as PostType } from "@/types/Post";

export interface PostProps {
  data: PostType[] | null;
}
export default function Post() {
  const data = useGetPosts();
  return <PostTemplate data={data} />;
}
