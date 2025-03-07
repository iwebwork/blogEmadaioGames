import { PropsWithChildren } from "react";

export interface ILayoutUi extends PropsWithChildren {
  SiderChildrenLeft?: React.ReactNode
  SiderChildrenRight?: React.ReactNode
}