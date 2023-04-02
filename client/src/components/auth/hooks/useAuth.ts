import {axiosInstance} from "@/axios";
import {useRecoilState} from "recoil";
import {snackbar} from "@/recoil/atom";
import {useRouter} from "next/router";

export type User = {
  email: string;
  password: string;
};

export function useAuth() {
  const router = useRouter()
  const [_, setSnack] = useRecoilState(snackbar)

  async function authServerCall(urlEndpoint: string, data: User) {
    try {
      const response = await axiosInstance({
        url: urlEndpoint,
        method: "POST",
        data: data,
        headers: {"Content-Type": "application/json"},
      });

      if (response.status === 201) {
        setSnack({open: true, text: "계정이 생성되었습니다.", severity: "success"})
        return router.push('/auth/login')
      }

      return
    } catch (err) {
      console.log("err", err);
      // @ts-ignore
      setSnack({open: true, text: err.response.data.message, severity: "error"})
    }
  }

  async function login(data: User) {
    await authServerCall("auth/login", data);
  }

  async function signin(data: User) {
    await authServerCall("auth/signin", data);
  }

  return {
    login,
    signin
  };
}
