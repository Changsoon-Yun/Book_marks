import axios, { CreateAxiosDefaults } from 'axios';

const config: CreateAxiosDefaults = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
};

export const axiosInstance = axios.create(config);
