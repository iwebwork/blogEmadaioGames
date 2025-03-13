import { lazy } from "react";

const date = new Date().toLocaleDateString(`pt-BR`, {
  day: `2-digit`,
  month: `2-digit`,
  year: `numeric`
}); 

export const routsPostsNoticias = (post: string) => {
  const component = lazy(() => import(`./../../site/noticias/posts/${post}`));

  return component;
}

export interface IPost {
  id: string;
  post: string;
  title: string;
  date: string;
}

const noticias: IPost[] = [
  {
    id: '1',
    post: 'primeiroPost',
    title: `O vento sopra suave, folhas dançam, a tarde se despede, estrelas logo brilharão.`,
    date: date
  },
  {
    id: '2',
    post: 'forzaPS5',
    title: `Preparem os motores! Forza Horizont 5,está prestes a acelerar no Playstation 5`,
    date: '04/02/2025'
  }
];

export default noticias;