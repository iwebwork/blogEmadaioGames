import React, { lazy } from "react";
import { useParams } from "react-router";
import Pallet from "../colorsPalette";
import SuspenseUi from "../suspense";
import { IComponent } from "./props";

const routePost = (tipo: string, post: string) => {
  console.log(post); // Olhar como chamar o post não encontrado.

  try {
    const component = lazy(() => import(`./../../../site/${tipo}/${post}`))
    return component;

  } catch (error) {
    console.log('caiu erro', error);
    const component = lazy(() => import(`./../naoEncontrado`))
    return component;
  }

}

const Component: React.FC<IComponent> = ({ tipo, idPost }) => {

  const View = routePost(tipo, idPost || "naoEncontrado");

  return (
    <SuspenseUi>
      <View />
    </SuspenseUi>
  )
}

const PostUi: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { tipo } = useParams<{ tipo: string }>();

  return (
    <div style={{
      backgroundColor: Pallet.BackGround.secundaria,
      marginTop: 20,
      marginBottom: 40,
      marginRight: 20
    }}>
      <Component tipo={tipo || "naoEncontrado"} idPost={id || ""} />
    </div>
  )
}

export default PostUi;