import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { IRequest, IResponse } from "./props";
interface CustomInstanceConfig extends AxiosRequestConfig {
  // Adicione configurações personalizadas, se necessário
}

const api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_URL_API,
  headers: {
    'Content-Type': 'application/json'
  }
} as CustomInstanceConfig);

export const post = async (request: IRequest): Promise<IResponse> => {  
  const response = (await api.post(request.url, request.body)).data;
  return response;
}