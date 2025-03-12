import { lazy } from "react";

const date = new Date().toLocaleDateString(`pt-BR`, {
  day: `2-digit`,
  month: `2-digit`,
  year: `numeric`
}); 

// export const routsPosts = {
//   primeiroPost: lazy(() => import('./../../site/noticias/posts/primeiroPost')),
//   naoEncontrado: lazy(() => import('./../../site/noticias/posts/naoEncontrado'))
// }

export const routsPosts = (post: string) => {
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
    post: '',
    title: `O vento sopra suave, folhas dançam, a tarde se despede, estrelas logo brilharão.`,
    date: date
  },
  {
    id: '3',
    post: '',
    title: `O vento sopra suave, folhas dançam, a tarde se despede, estrelas logo brilharão.`,
    date: date
  },
  {
    id: '4',
    post: '',
    title: `O vento sopra suave, folhas dançam, a tarde se despede, estrelas logo brilharão.`,
    date: date
  }
];

export default noticias;