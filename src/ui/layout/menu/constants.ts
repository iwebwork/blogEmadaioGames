import { TypePosts } from "../../listPosts/props";

interface IUrl {
  key: TypePosts;
  url: string;
  label: string;
  liberado: boolean;
}

export const getUrls: IUrl[] =  [
  {
    key: 'noticias',
    url: '/site/noticias',
    label: 'Noticias',
    liberado: true
  },
  {
    key: 'reviews',
    url: '/site/reviews',
    label: 'Reviews',
    liberado: false
  },
  {
    key: 'quemSomos',
    url: '/site/quemSomos',
    label: 'Quem Somos',
    liberado: true
  }
] as IUrl[];

