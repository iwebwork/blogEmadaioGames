import React from "react";
import BodyViewUi from "./body.view";
import { IListPostsUi } from './props';

const ListPostsUi: React.FC<IListPostsUi> = () => {
  return (
    <BodyViewUi key={Math.random()} />
  )
}

export default ListPostsUi;