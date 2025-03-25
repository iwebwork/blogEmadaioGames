import { Flex, Spin } from "antd";
import React, { lazy, Suspense, useState } from "react";
import { useParams } from "react-router";
import { post } from "../../hooks/api";
import { IPost } from "../../hooks/api/props";
import { IComponent } from "./props";

const routePost = (tipo: string, post: string) => {
  if (post === "postNaoEncontrado") {
    const component = lazy(() => import(`./../../site/${post}`));
    return component;
  }

  const component = lazy(() => import(`./../../site/${tipo}/posts/${post}`));
  return component;
}

const ComponentUI: React.FC<IComponent> = ({ tipo, idPost }) => {
  const [selectPost, setSelectPost] = useState<IPost>();

  const findPost = async () => {
    const result = (await post({ url: `/api/posts/select/${idPost}`, body: {} })).data;

    if (!result)
      return;

    setSelectPost(result);
  }

  React.useEffect(() => {
    findPost();
  }, [idPost])

  const ComponentRoute = routePost(tipo, selectPost?.name || "postNaoEncontrado");
  return (
    <Suspense fallback={
      <Flex justify="center">
        <Spin tip="Loading" size="large" fullscreen >
          Loading...
        </Spin>
      </Flex>
    }>
      <ComponentRoute />
    </Suspense >
  )
}

const PostView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { tipo } = useParams<{ tipo: string }>();

  return (
    <ComponentUI tipo={tipo || "naoEncontrado"} idPost={id || "naoEncontrado"} />
  )
}

export default PostView;