export interface IData {
  id: string;
  tipo: string;
  title: string;
  date: string;
  image?: string;
  body?: string;
}

export interface IPost {
  id: string;
  post: string;
  title: string;
  date: string;
  image: string;
  liberado: boolean;
}