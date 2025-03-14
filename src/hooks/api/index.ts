import axios from "axios";
import React from "react";
import { IPost } from "./props";
import { formatarDataPorExtenso } from "../comuns";

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
      title: res.title
    }
  }) as IPost[]

  return data;
};

export const selectNoticia = async (id: string): Promise<IPost> => {
  const response = await getNoticias();

  const post = response.find(post =>  post.id === id) || {} as IPost;
  
  return post;
}