import { Flex, Spin } from "antd";
import React, { lazy, Suspense, useState } from "react";
import { useParams } from "react-router";
import { select } from "../../hooks/api";
import { IPost } from "../../hooks/api/props";
import { IComponent } from "./props";

const routePost = (tipo: string, post: string) => {
  const component = lazy(() => import(`./../../site/${tipo}/posts/${post}`));

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

  const Component = routePost(tipo, post?.post || "naoEncontrado");

  return (
    <Suspense fallback={
      <Flex justify="center">
        <Spin tip="Loading" size="large" fullscreen >
          Loading...
        </Spin>
      </Flex>
    }>
      <Component />
    </Suspense >
  )
}

const PostView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { tipo } = useParams<{ tipo: string }>();

  return (
    <Component tipo={tipo || "notfound"} idPost={id || ""} />
  )
}

export default PostView;