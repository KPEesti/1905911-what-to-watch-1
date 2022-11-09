import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {getToken} from './token';

const BACKEND_URL = 'https://10.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT
  });

  // api.interceptors.request.use(
  //   (config: AxiosRequestConfig) => {
  //     const token = getToken();
  //
  //     if (token) {
  //       // config.headers['x-token'] = token;
  //       config.headers['x-token'] = 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=';
  //     }
  //
  //     return config;
  //   }
  // );

  return api;
}
