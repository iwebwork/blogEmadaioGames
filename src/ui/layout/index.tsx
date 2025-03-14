import { Col, Flex, Layout, Row } from 'antd';
import Title from 'antd/es/typography/Title';
import React from 'react';
import Pallet from './colorsPalette';
import MenuUi from './menu';
import { ILayoutUi } from './props';
import SiderLayout from './sider';
import { contentStyle, footerStyle, layoutStyle, layoutStyleContent } from './styles';

const { Footer, Content } = Layout;

const LayoutViewUi: React.FC<ILayoutUi> = ({ children, SiderChildrenLeft, SiderChildrenRight }) => {
  return (
    <Layout style={layoutStyle}>
      <MenuUi />

      <Layout style={layoutStyleContent}>
        {(SiderChildrenLeft && process.env.NODE_ENV === 'production') &&
          <SiderLayout>
            {SiderChildrenLeft}
          </SiderLayout>}

        <Layout style={contentStyle}>
          {children &&
            <Content>
              {children}
            </Content>}
        </Layout>

        {(SiderChildrenRight && process.env.NODE_ENV === 'production') &&
          <SiderLayout>
            {SiderChildrenRight}
          </SiderLayout>}

        {(process.env.NODE_ENV === 'production') &&
          <Flex justify={'center'} hidden>
            <Col span={18}>
              <div id="container-03e4cb914ac639fadad951bcf7c1b7f2" />
            </Col>
          </Flex >}
      </Layout>

      <Footer style={footerStyle}>
        <Title style={{
          color: Pallet.Typography.principal
        }} level={3}>Todos os direitos reservados</Title>
      </Footer>
    </Layout>
  )
}

export default LayoutViewUi;