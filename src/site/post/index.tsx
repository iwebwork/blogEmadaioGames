import { Flex, Spin } from "antd";
import React, { lazy, Suspense, useState } from "react";
import { useParams } from "react-router";
import { selectNoticia } from "../../hooks/api";
import { IPost } from "../../hooks/api/props";
import { IComponent } from "./props";

const routsPostsNoticias = (post: string) => {
  const component = lazy(() => import(`./../../site/noticias/posts/${post}`));

  return component;
}

const Component: React.FC<IComponent> = ({ idPost }) => {
  const [post, setPost] = useState<IPost>();

  const fetchNoticia = async () => {
    const result = await selectNoticia(idPost);
    if (!result)
      return;
    setPost(result);
  }

  React.useEffect(() => {
    fetchNoticia();
  }, [idPost])

  const Component = routsPostsNoticias(post?.post || "naoEncontrado");

  return (
    <Suspense fallback={
      <Flex justify="center">
        <Spin tip="Loading" size="large">
          Loading...
        </Spin>
      </Flex>
    }>
      <Component />
    </Suspense>
  )
}

const PostView: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Component idPost={id || ""} />
  )
}

export default PostView;