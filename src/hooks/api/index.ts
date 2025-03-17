import axios from "axios";
import { formatarDataPorExtenso } from "../comuns";
import { IPost } from "./props";

export const diretorioExiste = async(diretorio: string): Promise<boolean> => {
  return axios.get(diretorio)
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });    
}

export const getNoticias = async (): Promise<IPost[]> => {
  const response = (await axios.get<IPost[]>('/data/noticias.json')).data;
  
  const data = response.map((res) => {
    return {
      id: res.id,
      date: formatarDataPorExtenso(res.date),
      post: res.post,
      title: res.title,
      liberado: res.liberado
    }
  }) as IPost[];
  
  if (process.env.NODE_ENV === 'production') {
    return data.filter((data) => data.liberado === true);
  }

  return data;

};

export const selectNoticia = async (id: string): Promise<IPost> => {
  const response = await getNoticias();

  const post = response.find(post =>  post.id === id) || {} as IPost;
  
  return post;
}