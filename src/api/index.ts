import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type RequestType = 'arraybuffer' | 'blob' | 'document' | 'json' | 'stream';

export interface AxiosRequest {
  baseUrl?: string;
  url: string;
  data?: any;
  params?: any;
  method?: Method;
  headers?: any;
  timeout?: number;
  responseType?: RequestType;
}

export interface ResponseData {
  code: string;
  msg: string;
  data?: any;
}

// 请求过期时间
const TIME_OUT = 6000;

const instance = axios.create({
  timeout: TIME_OUT
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    if (response.status === 200) {
      return response.data;
    }
    return Promise.reject(response.data);
  },
  (error) => Promise.reject(new Error('服务器未正常处理请求。'))
);

export default instance;
