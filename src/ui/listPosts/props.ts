import { IPost } from "../../hooks/api/props";

export type PaginationPosition = 'top' | 'bottom' | 'both';

export type PaginationAlign = 'start' | 'center' | 'end';

export type TypePosts = 'Noticias' | 'Reviews' | 'QuemSomos' | 'CadastroPost' | 'Curiosidades';

export interface IListPostsUi {
  tipo: TypePosts
  posts: IPost[]
}
