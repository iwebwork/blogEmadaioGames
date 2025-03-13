import { Flex, Spin } from "antd";
import React, { Suspense, useState } from "react";
import { useParams } from "react-router";
import noticias, { IPost, routsPostsNoticias } from "../../data/noticias";

const PostView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [posts] = useState<IPost[]>(noticias);

  const Component =
    routsPostsNoticias(posts.find(post => post.id === id)?.post || "naoEncontrado")

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

export default PostView;