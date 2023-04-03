import { axiosInstance } from "@/lib/axios";
import { useRecoilState } from "recoil";
import { snackbarAtom } from "@/lib/recoil/atom";
import { useRouter } from "next/router";
import axios, { AxiosResponse } from "axios";
import { deleteCookie, setCookie } from "@/lib/cookie/cookie";

export type User = {
  email: string;
  password: string;
};

export function useAuth() {
  const router = useRouter();
  const [snack, setSnack] = useRecoilState(snackbarAtom);

  async function authServerCall(urlEndpoint: string, data: User) {
    try {
      const response: AxiosResponse = await axiosInstance({
        url: urlEndpoint,
        method: "POST",
        data: data,
        headers: { "Content-Type": "application/json" },
      });

      console.log(response);

      if (urlEndpoint === "auth/login") {
        console.log();
        if (response.status === 200) {
          setCookie("creative-wallet", response.data.accessToken);

          // return router.push("/", undefined, { shallow: true });
        }
      }

      if (urlEndpoint === "auth/signin") {
        setSnack({
          open: true,
          text: "계정이 생성되었습니다.",
          severity: "success",
        });
        return router.push("/auth/login", undefined, { shallow: true });
      }
    } catch (err) {
      console.log(err);
      // axios에서 error를 처리하는 방법
      if (axios.isAxiosError(err) && err.response) {
        setSnack({
          open: true,
          text: err.response.data.message,
          severity: "error",
        });
      }
      // @ts-ignore
    }
  }

  async function login(data: User) {
    await authServerCall("auth/login", data);
  }

  async function signin(data: User) {
    await authServerCall("auth/signin", data);
  }

  function logout() {
    deleteCookie();
  }

  return {
    login,
    signin,
    logout,
  };
}
