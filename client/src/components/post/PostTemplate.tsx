import { PostProps } from "@/pages/post";

export default function PostTemplate(props: PostProps) {
  const { data } = props;
  console.log(data);
  return <div></div>;
}
