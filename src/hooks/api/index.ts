import axios from "axios";
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
  
  return response;
}

export const selectNoticia = async (id: string): Promise<IPost> => {
  const response = await getNoticias();

  const post = response.find(post =>  post.id === id) || {} as IPost;
  
  return post;
}