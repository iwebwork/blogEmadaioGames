import React, { lazy, useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import { IPost } from "../hooks/api/props";
import LayoutViewUi from "../ui/layout";
import PostUi from "../ui/layout/post";
import ListPostsUi from "../ui/listPosts";
import CadastroPostView from "./cadastroPost";
import { ISiteViewView } from "./props";
import hookApi from "../hooks/api";
import { Col, Flex, Image } from "antd";

const QuemSomosView = lazy(() => import(`./quemSomos`));
const NaoEncontradoView = lazy(() => import(`./../ui/layout/naoEncontrado`));

const Sider: React.FC = () => {
  return (
    <Flex justify={'center'}>
      {process.env.NODE_ENV === 'production' ?
        <Col span={18}>
          <div id="container-03e4cb914ac639fadad951bcf7c1b7f2" />
        </Col>
        : <Col span={18}><Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png" /></Col>}
    </Flex >
  )
}

const SiteView: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  // const [noticias, setNoticias] = useState<IPost[]>([]);
  // const [reviews, setReviews] = useState<IPost[]>([]);
  const { post } = hookApi();

  const fetchPosts = async () => {
    const result: IPost[] = (await post({ url: `/api/posts/getTable`, body: {} })).data;

    if (!result)
      return;

    setPosts(result);
  }

  React.useEffect(() => {
    fetchPosts();
  }, []);

  const PostsView: React.FC<ISiteViewView> = ({ tipo }) => {
    const result = posts.filter(s => s.tipoNome === tipo);

    if (result.length > 0)
      return <ListPostsUi posts={result} tipo={tipo} />
    else
      return <NaoEncontradoView />
  }

  return (
    <LayoutViewUi
      // SiderChildrenLeft={process.env.NODE_ENV === 'production' && <Sider />}
      SiderChildrenRight={<Sider />}
    >
      <Routes>
        <Route index path='/noticias' element={<PostsView tipo="noticias" />} />
        <Route path='/reviews' element={<PostsView tipo="reviews" />} />
        <Route path='/quemSomos' element={<QuemSomosView />} />
        <Route path='/post/:id' element={<PostUi />} />
        <Route path='/cadastroPost' element={<CadastroPostView />} />
        <Route path='*' element={<Navigate to={'/noticias'} />} />
        <Route path='/naoEncontrado' element={<NaoEncontradoView />} />
      </Routes>
    </LayoutViewUi >
  )
}

export default SiteView;