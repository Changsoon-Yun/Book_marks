import { axiosInstance } from "@/lib/axios";
import { useQuery } from "react-query";

export type UserInput = {
  title: string;
  content: string;
};

async function getPosts() {
  const { data } = await axiosInstance.get("/post");
  return data;
}

async function createPost(data: UserInput) {
  const res = await axiosInstance.post("/post/write", data);
  console.log(res);
  return res;
}

export function usePost() {
  const { data: posts = [] } = useQuery(["getPosts"], getPosts);

  return { posts, createPost };
}
