import { IPost } from "../../hooks/api/props";

export type TypePosts = 'Noticias' | 'Reviews' | 'QuemSomos' | 'CadastroPost' | 'Curiosidades';

export type PaginationPosition = 'top' | 'bottom' | 'both';

export type PaginationAlign = 'start' | 'center' | 'end';

export interface IListPostsUi {
  
}

export const PAGE_SIZE = 3;