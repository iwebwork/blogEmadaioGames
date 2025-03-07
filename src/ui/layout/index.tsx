import React from 'react';
import { Layout } from 'antd';
import MenuUi from './menu';
import Title from 'antd/es/typography/Title';
import { ILayoutUi } from './props';
import Pallet from './colorsPalette';
import SiderLayout from './sider';

const { Header, Footer, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  position: 'sticky',
  top: 0,
  zIndex: 1,
  width: '100%',
  backgroundColor: Pallet.BackGround.principal
};

const contentStyle: React.CSSProperties = {
  flex: 1,
  textAlign: 'center',
};

const footerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: Pallet.BackGround.principal
};

const layoutStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const layoutStyleContent: React.CSSProperties = {
  display: 'flex',
  backgroundColor: Pallet.BackGround.secundaria,
  color: Pallet.Typography.principal,
};

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