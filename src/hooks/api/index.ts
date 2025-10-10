import axios from "axios";
import { IRequest, IResponse } from "./props";
import TokenService from "../../contexts/auth/token";

const api = axios.create({
  baseURL: process.env.REACT_APP_URL_API,
  headers: {
    'Content-Type': 'application/json',
  }
});

api.interceptors.request.use(
  (config) => {
    const token = TokenService.getLocalAccessToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (res) => {
    return res;
  },
  async (erro) => {
    if (erro?.response.status === 401) {
      TokenService.removeUser();
       window.location.href = '/site';
    }
  }
);

const hooksApi = () => {
  
  const post = async (request: IRequest): Promise<IResponse> => {
    const response = (await api.post(request.url, request.body)).data;
    
    return response;
  };

  return {post};
}

export default hooksApi;