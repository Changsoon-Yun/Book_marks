import axios, { CreateAxiosDefaults } from "axios";
import { baseUrl } from "@/lib/axios/constants";
import { getCookie } from "@/lib/cookie/cookie";
import { getJWTHeader } from "@/lib/axios/queryClient";

const config: CreateAxiosDefaults = {
  baseURL: baseUrl,
};

export const axiosInstance = axios.create(config);
