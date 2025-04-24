import { IUrl } from "./props";

export const getUrls: IUrl[] =  [
  {
    key: 'Noticias',
    url: '/site/noticias',
    path: '/noticias',
    label: 'Noticias',
    liberado: true,
    index: true
  },
  {
    key: 'Reviews',
    url: '/site/reviews',
    path: '/reviews',
    label: 'Reviews',
    liberado: false
  },
  {
    key: 'Curiosidades',
    url: '/site/curiosidades',
    path: '/curiosidades',
    label: 'Curiosidades',
    liberado: false
  },
  {
    key: 'QuemSomos',
    url: '/site/quemSomos',
    path: '/quemSomos',
    label: 'Quem Somos',
    liberado: true
  },
  {
    key: 'CadastroPost',
    url: '/site/cadastroPost',
    path: '/cadastroPost',
    label: 'cadastro de Post',
    liberado: false
  },
] as IUrl[];

