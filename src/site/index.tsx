import React, { lazy, useState } from "react";
import { Route, Routes } from "react-router";
import hookApi from "../hooks/api";
import { IPost } from "../hooks/api/props";
import LayoutViewUi from "../ui/layout";
import { fetchMenu } from "../ui/layout/menuUi/model";
import { IMenu } from "../ui/layout/menuUi/props";
import PostUi from "../ui/layout/postUi";
import ListPostsUi from "../ui/listPosts";
import CadastroPostView from "./cadastroPost";
import { ISiteViewView } from "./props";
import Sider from "antd/es/layout/Sider";
import SiderUi from "../ui/layout/siderUi";
import { Col, Flex, Image, Row, Typography } from "antd";
import Link from "antd/es/typography/Link";
import Pallet from "../ui/layout/colorsPalette";

const QuemSomosView = lazy(() => import(`./quemSomos`));
const NaoEncontradoView = lazy(() => import(`../ui/layout/naoEncontradoUi`));

// const Sider: React.FC = () => {
//   return (
//     <Flex justify={'center'}>
//       {process.env.NODE_ENV === 'production' ?
//         <Col span={18}>
//           <div id="container-03e4cb914ac639fadad951bcf7c1b7f2" />
//         </Col>
//         : <Col span={18}><Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png" /></Col>}
//     </Flex >
//   )
// }

const PostsView: React.FC<ISiteViewView> = ({ tipo }) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const { post } = hookApi();
  const [postsFilter, setPostsFilter] = useState<IPost[]>([])
  const [isLoadPosts, setIsLoadPosts] = useState<boolean>(false);

  const fetchPosts = async () => {
    setIsLoadPosts(false);
    const result = (await post({ url: `/api/posts/getTable`, body: {} }));

    if (!result.isValid) {
      setPosts([]);
      setIsLoadPosts(false);
      return;
    }

    setPosts(result.data as IPost[]);
    setIsLoadPosts(true);
  }

  const filterPosts = (ptipoPostId: string) => {
    const data = posts
      .filter(s => s.tipoPostId === ptipoPostId);

    if (process.env.NODE_ENV === 'production')
      setPostsFilter(data.filter(s => s.liberado === 1))
    else
      setPostsFilter(data);
  }

  React.useEffect(() => {
    fetchPosts();
  }, [tipo]);

  React.useEffect(() => {
    if (!isLoadPosts)
      return;

    filterPosts(tipo);
  }, [posts]);

  React.useEffect(() => {
    if (!isLoadPosts)
      return;

    setIsLoadPosts(true);
  }, [postsFilter, isLoadPosts])

  return <>
    {isLoadPosts &&
      <ListPostsUi posts={postsFilter} tipo={tipo} />
    }
  </>

}

const GetRoutesUrl: React.FC = () => {
  let data: any = [];
  const [menu, setMenu] = useState<IMenu[]>([]);

  const buscarMenu = async () => {
    const data = await fetchMenu() || [];
    setMenu(data);
  }

  React.useEffect(() => {
    buscarMenu();
  }, [])

  menu.map((value, index) => {
    data.push(<Route key={index} index={value.index} path={value.path} element={
      value.label === 'Cadastro de Post'
        ? <CadastroPostView />
        : value.label === 'Quem Somos'
          ? <QuemSomosView />
          : <PostsView tipo={value.tipoPostId} />
    } />)
  });

  return <Routes>
    {data}
    <Route path='/post/:id' element={<PostUi />} />
    <Route path='*' element={<NaoEncontradoView />} />
  </Routes>
}

//TODO: Pensar na forma que vamos listar os banners de anuncios
const SiteView: React.FC = () => {

  return (
    <LayoutViewUi
      SiderChildrenRight={<SiderUi>
        <Row
          justify="center"
          style={{
            marginRight: 30
          }}
        >
          <Typography.Paragraph>
            <Typography.Title level={4}>
              Parceiros
            </Typography.Title>
          </Typography.Paragraph>
          <Link target="_blank"
            href="https://click.linksynergy.com/fs-bin/click?id=lguYJQvVovc&offerid=1767913.1664&subid=0&type=4"
          >

            <Image title="Aliexpress BR"
              src="https://ad.linksynergy.com/fs-bin/show?id=lguYJQvVovc&bids=1767913.1664&subid=0&type=4&gridnum=0"
              preview={false}
              style={{
                width: '100%'
              }}

            />
          </Link>
        </Row>
        <Row
          style={{
            marginRight: 30
          }}
        >
          <div id="container-bd346bb6aa3254da62090d59214f97e8"></div>
        </Row>
      </SiderUi >}
    >
      <GetRoutesUrl />
    </LayoutViewUi >
  )
}

export default SiteView;