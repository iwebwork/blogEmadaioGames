import { Col, ConfigProvider, Flex, FloatButton, Image, Layout, Row } from 'antd';
import Title from 'antd/es/typography/Title';
import React from 'react';
import { ButtonYouTubeUi } from './buttons';
import Pallet from './colorsPalette';
import MenuUi from './menu';
import { ILayoutUi } from './props';
import SiderLayout from './sider';
import { contentStyle, footerStyle, layoutStyle, layoutStyleContent } from './styles';

const { Footer, Content } = Layout;

const LayoutViewUi: React.FC<ILayoutUi> = ({ children, SiderChildrenLeft, SiderChildrenRight }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Pagination: {
            itemActiveBg: Pallet.Typography.principal,
            colorPrimary: Pallet.Typography.secundaria,
            colorPrimaryHover: Pallet.Typography.secundaria
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