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
  name: string;
  title: string;
  date: string;
  image: string;
  liberado: boolean;
}

export interface IRequest {
  url: string;
  body: any
}

export interface IResponse {
  data: any
}
