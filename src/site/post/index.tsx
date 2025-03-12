import { Row } from "antd";
import React, { Suspense, useState } from "react";
import { useParams } from "react-router";
import noticias, { IPost, routsPosts } from "../../data/noticias";

const PostView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [posts] = useState<IPost[]>(noticias);

  React.useEffect(() => {
    const value = posts.find(post => post.id === id);

    if (!value)
      return;
  }, [id, posts]);

  const Component = routsPosts(posts.find(post => post.id === id)?.post || "naoEncontrado");

  return (
    <Suspense fallback={<Row>Carregando ....</Row>}>
      <Component />
    </Suspense>
  )
}

export default PostView;