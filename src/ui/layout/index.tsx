import { ConfigProvider, FloatButton, Layout, Row } from 'antd';
import Title from 'antd/es/typography/Title';
import React from 'react';
import { ButtonYouTubeUi } from './buttonsUi';
import Pallet from './colorsPalette';
import MenuUi from './menuUi';
import { ILayoutUi } from './props';
import SiderLayout from './siderUi';
import { contentStyle, footerStyle, layoutStyle, layoutStyleContent } from './styles';
import Anuncio from '../anuncio';
import { useWindowSize } from './hooksUi';

const { Footer, Content } = Layout;

const LayoutViewUi: React.FC<ILayoutUi> = ({ children, SiderChildrenLeft, SiderChildrenRight }) => {
  const window = useWindowSize();

  // const [listAnuncio, setListAnuncio] = useState();

  // const getSideBarAnuncios = async () => {
  //   if (process.env.NODE_ENV === 'production')
  //     return;

  //   const result = (await post({ url: `/api/anuncios/selectTipo/${2}`, body: {} }));

  //   if (result.isValid) {
  //     const data: IResponseAnuncio = result.data;
  //   }
  // }

  return (
    <ConfigProvider
      theme={{
        components: {
          Pagination: {
            itemActiveBg: Pallet.Typography.principal,
            colorPrimary: Pallet.Typography.secundaria,
            colorPrimaryHover: Pallet.Typography.secundaria
          },
          Typography: {
            fontSize: window.width >= 600 ? 14 : 12
          }
        }
      }}
    >
      <Layout style={layoutStyle}>
        <MenuUi />

        <Layout style={layoutStyleContent}>
          <Layout style={contentStyle}>
            {children &&
              <Content>
                {children}
              </Content>}
          </Layout>

          {SiderChildrenRight &&
            <SiderLayout>
              {SiderChildrenRight}
            </SiderLayout>}
        </Layout>

        <Footer style={footerStyle}>
          <Row justify={'center'} >
            <Title style={{
              color: Pallet.Typography.principal
            }} level={3}>Todos os direitos reservados</Title>
          </Row>
        </Footer>

        <FloatButton.Group shape='circle' style={{ insetInlineEnd: 24 }}>
          <ButtonYouTubeUi />
        </FloatButton.Group>
      </Layout>
    </ConfigProvider >
  )
}

export default LayoutViewUi;