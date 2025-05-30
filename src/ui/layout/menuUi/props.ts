import { MenuProps, MenuTheme } from "antd";
import { TypePosts } from "../../listPosts/props";

export type TMenuItem = Required<MenuProps>['items'][number];

export type MenuMode = 'horizontal' | 'vertical' | 'inline';

export interface ITheme {
  theme: MenuTheme,
  mode: MenuMode,
  backGroundColor?: string;
  color?: string;
}


export interface IUrl {
  key: TypePosts;
  url: string;
  path: string;
  label: string;
  liberado: boolean;
  index: boolean;
}
