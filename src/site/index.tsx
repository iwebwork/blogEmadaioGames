import { Image, Row, Typography } from "antd";
import Link from "antd/es/typography/Link";
import React, { lazy, useState } from "react";
import { Route, Routes } from "react-router";
import CadastroPostView from "../adm/cadastroPost";
import hooksApi from "../hooks/api";
import LayoutViewUi from "../ui/layout";
import MenuUi from "../ui/layout/menuUi";
import { IMenu } from "../ui/layout/menuUi/props";
import PostUi from "../ui/layout/postUi";
import SiderUi from "../ui/layout/siderUi";

const QuemSomosView = lazy(() => import(`../adm/quemSomos`));
const NaoEncontradoView = lazy(() => import(`../ui/layout/naoEncontradoUi`));
const ListPostsView = lazy(() => import('./posts'))

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


const GetRoutesUrl: React.FC = () => {
  let data: any = [];
  const [menu, setMenu] = useState<IMenu[]>([]);

  const buscarMenu = async () => {
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
          : <ListPostsView />
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
  const { post } = hooksApi()
  const [itensMenu, setItensMenu] = useState<IMenu[]>([])
  const [isLoadMenu, setIsLoadMenu] = useState(false);

  const fetchMenu = async () => {
    const response = (await post({ url: `api/menu/getTable`, body: {} }));
    setIsLoadMenu(true);
    setItensMenu(response.data)
  }

  React.useEffect(() => {
    if (!isLoadMenu)
      fetchMenu();
  }, [])

  React.useEffect(() => {
    if (!isLoadMenu)
      setItensMenu([]);

  }, [isLoadMenu])

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
              }} />
          </Link>
        </Row>
        <Row
          style={{
            marginRight: 30
          }}
        >
          <div id="container-bd346bb6aa3254da62090d59214f97e8"></div>
        </Row>
      </SiderUi>}
      Menu={isLoadMenu && <MenuUi itens={itensMenu} />}>
      <GetRoutesUrl />
    </LayoutViewUi >
  )
}

export default SiteView;