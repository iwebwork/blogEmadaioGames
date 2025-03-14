interface IUrl {
  key: string;
  value: string
}

export const getUrls: IUrl[] =  
   [{
    key: 'noticias',
    value: '/site/noticias'
  },
  {
    key: 'quemSomos',
    value: '/site/quemSomos'
  }
] as IUrl[];

