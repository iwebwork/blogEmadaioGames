export interface IData {
  id: string;
  title: string;
  date: string;
  body?: string;
}

export interface IPost {
  id: string;
  post: string;
  title: string;
  date: string;
  liberado: boolean;
}