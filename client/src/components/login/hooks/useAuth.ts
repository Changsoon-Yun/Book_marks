import {axiosInstance} from "@/axios";

export type User = {
  email: string;
  password: string;
};

export function useAuth() {
  async function authServerCall(urlEndpoint: string, data: User) {
    try {
      const response = await axiosInstance({
        url: urlEndpoint,
        method: "POST",
        data: data,
        headers: {"Content-Type": "application/json"},
      });

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  async function login(data: User) {
    await authServerCall("/login", data);
  }

  async function signin(data: User) {
    await authServerCall("/signin", data);
  }

  return {
    login: login,
  };
}
