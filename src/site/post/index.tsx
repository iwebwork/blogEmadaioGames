import { Flex, Spin } from "antd";
import React, { lazy, Suspense, useState } from "react";
import { useParams } from "react-router";
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
  const [post, setPost] = useState<IPost>();

  const fetchPost = async () => {
    const result = await select(`/data/${tipo}.json`, idPost);
    if (!result)
      return;
    setPost(result);
  }

  React.useEffect(() => {
    fetchPost();
  }, [idPost])

  const ComponentRoute = routePost(tipo, post?.post || "postNaoEncontrado");

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