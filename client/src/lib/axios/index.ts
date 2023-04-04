import axios, { CreateAxiosDefaults } from "axios";
import { baseUrl } from "@/lib/axios/constants";
import { getCookie } from "@/lib/cookie/cookie";
import { getJWTHeader } from "@/lib/axios/queryClient";

//FIXME: fix types

let token;
if (getCookie("creative-wallet")) {
  token = getJWTHeader();
}

const config: CreateAxiosDefaults = {
  baseURL: baseUrl,
  headers: token,
};

export const axiosInstance = axios.create(config);
