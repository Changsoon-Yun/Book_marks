import axios, { AxiosRequestConfig } from "axios";

//FIXME: fix types
export function getJWTHeader(user: { token: string }): Record<string, string> {
  return { Authorization: `Bearer ${user.token}` };
}

const config: AxiosRequestConfig = { baseURL: "example" };
export const axiosInstance = axios.create(config);
