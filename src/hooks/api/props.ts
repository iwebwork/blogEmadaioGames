export interface IData {
  id: string;
  tipo: string;
  name: string;
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
  tipo: number;
  tipoNome: string;
  corpo: string;
}

export interface IRequest {
  url: string;
  body: any
}

export interface IResponse {
  data: any,
  isValid: boolean;
}
