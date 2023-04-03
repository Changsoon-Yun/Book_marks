import { AxiosResponse } from "axios";
import { User } from "@/components/auth/hooks/useAuth";
import { axiosInstance } from "@/lib/axios";
import { deleteCookie, getCookie, setCookie } from "@/lib/cookie/cookie";
import { useQuery, useQueryClient } from "react-query";
import jwtDecode from "jwt-decode";

interface UseUser {
  user: User | null;
  updateUser: (user: User) => void;
  clearUser: () => void;
}
async function getUser() {
  const token = getCookie();
  const decoded = jwtDecode();
  console.log(decoded);
  if (!token) return null;
  const { data }: AxiosResponse<User | null> = await axiosInstance.post(
    "/auth/get-user",
    user,
    {
      headers: getCookie(),
    }
  );
  console.log(data);
  return data;
}

export function useUser() {
  const queryClient = useQueryClient();
  const { data } = useQuery<any, unknown, any, string[]>(["get-user"], () =>
    getUser()
  );

  return { data };
}
