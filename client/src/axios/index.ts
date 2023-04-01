import axios, {CreateAxiosDefaults} from "axios";
import {baseUrl} from "@/axios/constants";

//FIXME: fix types
export function getJWTHeader(user: { token: string }): Record<string, string> {
  return {Authorization: `Bearer ${user.token}`};
}

const config: CreateAxiosDefaults = {baseURL: baseUrl};

export const axiosInstance = axios.create(config);
