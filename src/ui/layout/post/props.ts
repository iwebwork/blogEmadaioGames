import { TitleProps } from "antd/es/typography/Title";

export type TGerarPost = IGerarPost[]

export interface ITitlePost extends TitleProps {
  text: string;
}
export interface IGerarPost {
  Row: IRow[]
}

export interface IRow {
  Image?: IImage
  Paragraph?: IParagraph
}

export interface IImage {
  href: string
}

export interface IParagraph {
  Title?: ITitle
  Text: string,
  strong?: boolean
}

type TLevel = 1 | 2 | 3 | 4 | 5;

export interface ITitle {
  Text: string
  Level: TLevel
}

export interface IPostComponent {
  title?: string;
  corpo?: any;
}