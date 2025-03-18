import axios from "axios";
import { formatarDataPorExtenso } from "../comuns";
import { IPost } from "./props";

export const get = async (url: string): Promise<IPost[]> => {
  const response = (await axios.get<IPost[]>(url)).data;
  
  const data = response.map((res) => {
    return {
      id: res.id,
      date: formatarDataPorExtenso(res.date),
      post: res.post,
      title: res.title,
      image: res.image,
      liberado: res.liberado
    }
  }) as IPost[];
  
  if (process.env.NODE_ENV === 'production') {
    return data.filter((data) => data.liberado === true);
  }

  return data;
};

export const select = async (url: string, id: string): Promise<IPost> => {
  const response = await get(url);

  const post = response.find(post =>  post.id === id) || {} as IPost;
  
  return post;
}