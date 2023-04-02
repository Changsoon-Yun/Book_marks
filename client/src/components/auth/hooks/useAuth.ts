import {axiosInstance} from "@/axios";
import {useRecoilState} from "recoil";
import {snackbarAtom} from "@/recoil/atom";
import {useRouter} from "next/router";
import {AxiosResponse} from "axios/index";

export type User = {
  email: string;
  password: string;
};

export function useAuth() {
  const router = useRouter()
  const [snack, setSnack] = useRecoilState(snackbarAtom)

  async function authServerCall(urlEndpoint: string, data: User) {
    try {
      const response: AxiosResponse<{ message: string, status: number }> = await axiosInstance({
        url: urlEndpoint,
        method: "POST",
        data: data,
        headers: {"Content-Type": "application/json"},
      });

      console.log(response)
      setSnack({open: true, text: response.data.message, severity: "error"})

      if (urlEndpoint === "auth/login") {
        return response.data
      }

      if (urlEndpoint === "auth/signin") {
        setSnack({open: true, text: "계정이 생성되었습니다.", severity: "success"})
        return router.push('/auth/login')

      }
      
    } catch (err) {
      console.log(err)
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
