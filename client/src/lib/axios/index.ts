import axios, { CreateAxiosDefaults } from "axios";
import { baseUrl } from "@/lib/axios/constants";

const config: CreateAxiosDefaults = {
  baseURL: baseUrl,
};

export const axiosInstance = axios.create(config);
