import axios, { CreateAxiosDefaults } from "axios";
import { baseUrl } from "@/lib/axios/constants";
import { getCookie } from "@/lib/cookie/cookie";

//FIXME: fix types

const token = getCookie("creative-wallet");

const config: CreateAxiosDefaults = {
  baseURL: baseUrl,
};

export const axiosInstance = axios.create(config);
