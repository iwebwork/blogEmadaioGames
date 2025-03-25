import axios from "axios";
import { IRequest, IResponse } from "./props";

const api = axios.create({
  baseURL: process.env.REACT_APP_URL_API,
  headers: {
    'Content-Type': 'application/json',
  }
})

export const post = async (request: IRequest): Promise<IResponse> => {  
  const response = (await api.post(request.url, request.body)).data;
  return response;
}