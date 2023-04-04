import { axiosInstance } from "@/lib/axios";
import { useQuery } from "react-query";

export type UserInput = {
  title: string;
  content: string;
};

export async function createPost(data: UserInput) {
  console.log(data);
  try {
    const res = await axiosInstance.post("/post/write", data);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
  // return res;
}

async function getPosts() {
  const { data } = await axiosInstance.get("/post");
  return data;
}

export function usePost() {
  const { data: posts = [] } = useQuery(["get-posts"], getPosts);

  return { posts };
}
