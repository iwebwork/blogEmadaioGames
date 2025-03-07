import React from 'react';
import { Layout } from 'antd';
import MenuUi from './menu';
import Title from 'antd/es/typography/Title';
import { ILayoutUi } from './props';
import Pallet from './colorsPalette';
import SiderLayout from './sider';
import { layoutStyle, headerStyle, layoutStyleContent, contentStyle, footerStyle } from './styles';

const { Header, Footer, Content } = Layout;

const LayoutViewUi: React.FC<ILayoutUi> = (props) => {
  const { children, SiderChildrenLeft, SiderChildrenRight } = props;

  return (
    <Layout style={layoutStyle}>

      <Header style={headerStyle}>
        <MenuUi />
      </Header>

      <Layout style={layoutStyleContent}>
        {SiderChildrenLeft &&
          <SiderLayout>
            {SiderChildrenLeft}
          </SiderLayout>}

        <Content style={contentStyle}>
          {children}
        </Content>

        {SiderChildrenRight &&
          <SiderLayout>
            {SiderChildrenRight}
          </SiderLayout>}
      </Layout>

      <Footer style={footerStyle}>
        <Title style={{
          color: Pallet.Typography.secundaria
        }} level={3}>Todos os direitos reservados</Title>
      </Footer>

    </Layout>
  )
}

export default LayoutViewUi;