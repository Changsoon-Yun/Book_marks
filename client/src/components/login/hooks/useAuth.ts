import {axiosInstance} from "@/axios";

export type LoginData = {
  email: string;
  password: string;
};

export function useAuth() {
  async function authServerCall(urlEndpoint: string, data: LoginData) {
    try {
      const response = await axiosInstance({
        url: urlEndpoint,
        method: "POST",
        data: data,
        headers: {"Content-Type": "application/json"},
      });

      console.log(response);
    } catch (err) {
      const {response} = err;
      console.log(response);
    }
  }

  async function signin(data: LoginData) {
    await authServerCall("/login", data);
  }

  return {
    signin,
  };
}
