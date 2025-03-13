import { MenuProps, MenuTheme } from "antd";

export type TMenuItem = Required<MenuProps>['items'][number];

export type MenuMode = 'horizontal' | 'vertical' | 'inline';

export interface ITheme {
  theme: MenuTheme,
  mode: MenuMode,
  backGroundColor?: string;
}

export const urls = [
  '/site/noticias'
]