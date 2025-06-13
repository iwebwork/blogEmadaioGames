import { IPost } from "../../hooks/api/props";

export type PaginationPosition = 'top' | 'bottom' | 'both';

export type PaginationAlign = 'start' | 'center' | 'end';

export interface IListPostsUi {
  tipo: string
  posts: IPost[]
}
