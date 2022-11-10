import axios, {AxiosError, AxiosInstance, AxiosRequestConfig} from 'axios';
import { setError } from '../store/action';
import {getToken} from './token';
import {useAppDispatch} from '../hooks/store-hooks';

const BACKEND_URL = 'https://10.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        config.headers['x-token'] = token;
      }

      return config;
    }
  );

  api.interceptors.response.use(
    (response) => response,
    (error:AxiosError<{error: string}>) => {
      if (error.response) {
        const dispatch = useAppDispatch();
        dispatch(setError(error.response.data.error));
      }
    }
  );

  return api;
};
