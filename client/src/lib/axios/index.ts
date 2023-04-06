import { baseUrl } from '@/lib/axios/constants';
import axios, { CreateAxiosDefaults } from 'axios';

const config: CreateAxiosDefaults = {
  baseURL: baseUrl,
};

export const axiosInstance = axios.create(config);
