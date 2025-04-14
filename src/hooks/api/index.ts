import axios from "axios";
import { IRequest, IResponse } from "./props";

// export const post = async (request: IRequest): Promise<IResponse> => {  
//   const response = (await api.post(request.url, request.body)).data;
//   return response;
// }

const hookApi = () => {
  const api = axios.create({
    baseURL: process.env.REACT_APP_URL_API,
    headers: {
      'Content-Type': 'application/json',
    }
  })
  
  const post = async (request: IRequest): Promise<IResponse> => {
    const response = (await api.post(request.url, request.body)).data;
      return response;
  };

  return {post};
}

export default hookApi;