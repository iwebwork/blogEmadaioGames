import { Col, Flex, Image } from "antd";
import React, { lazy, useState } from "react";
import { Route, Routes } from "react-router";
import hookApi from "../hooks/api";
import { IPost } from "../hooks/api/props";
import LayoutViewUi from "../ui/layout";
import { getUrls } from "../ui/layout/menuUi/constants";
import PostUi from "../ui/layout/postUi";
import ListPostsUi from "../ui/listPosts";
import CadastroPostView from "./cadastroPost";
import { ISiteViewView } from "./props";

const QuemSomosView = lazy(() => import(`./quemSomos`));
const NaoEncontradoView = lazy(() => import(`../ui/layout/naoEncontradoUi`));

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
    const data = posts.filter(s => s.tipoNome === tipo);
    const result = process.env.NODE_ENV === 'production'
      ? data.filter(s => s.liberado === 1)
      : data

    if (result.length > 0)
      return <ListPostsUi posts={result} tipo={tipo} />
    else
      return <NaoEncontradoView />
  }

  const GetRoutesUrl: React.FC = () => {
    let data: any = [];

    getUrls.map((value, index) => {
      data.push(<Route key={index} index={value.index} path={value.path} element={
        value.key === 'CadastroPost'
          ? <CadastroPostView />
          : value.key === 'QuemSomos'
            ? <QuemSomosView />
            : <PostsView tipo={value.key} />
      } />)
    });

    return <Routes>
      {data}
      <Route path='/post/:id' element={<PostUi />} />
      <Route path='*' element={<NaoEncontradoView />} />
    </Routes>
  }

  return (
    <LayoutViewUi
    // SiderChildrenRight={<Sider />}
    >
      <GetRoutesUrl />
    </LayoutViewUi >
  )
}

export default SiteView;