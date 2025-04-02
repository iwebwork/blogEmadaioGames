import React, { lazy, useState } from "react";
import { useParams } from "react-router";
import { select } from "../../../hooks/api";
import { IPost } from "../../../hooks/api/props";
import Pallet from "../colorsPalette";
import { IComponent } from "./props";
import SuspenseUi from "../suspense";

const routePost = (tipo: string, post: string) => {
  const component = lazy(() => import(`./../../../site/${tipo}/${post}`)
    .then((res) => {
      return res
    })
    .catch(() => {
      return import('./../postNaoEncontrado')
    }))

  return component;
}

const Component: React.FC<IComponent> = ({ tipo, idPost }) => {
  const [post, setPost] = useState<IPost>();

  const fetchPosts = async () => {
    const result = await select(`/data/${tipo}.json`, idPost);
    if (!result)
      return;
    setPost(result);
  }

  React.useEffect(() => {
    fetchPosts();
  }, [idPost])

  const Component = routePost(tipo, post?.post || "");

  return (
    <SuspenseUi>
      <Component />
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
      <Component tipo={tipo || "notfound"} idPost={id || ""} />
    </div>
  )
}

export default PostUi;