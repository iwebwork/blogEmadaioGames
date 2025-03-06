import React, { PropsWithChildren } from 'react';
import { Layout } from 'antd';
import MenuUi from './menu';
import Title from 'antd/es/typography/Title';

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  backgroundColor: '#ddd'
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  backgroundColor: '#fff',
  flex: 1
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  backgroundColor: '#eee',
};

const footerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center'
};

const layoutStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh'
};

const layoutStyleContent: React.CSSProperties = {
};

interface ILayoutUi extends PropsWithChildren {
}

const LayoutViewUi: React.FC<ILayoutUi> = (props) => {
  const { children } = props;

  return (
    <Layout style={layoutStyle}>

      <Header style={headerStyle}>
        <MenuUi />
      </Header>

      <Layout style={layoutStyleContent}>
        <Sider width="25%" style={siderStyle}>
          Sider
        </Sider>

        <Content style={contentStyle}>
          <div style={{}}>
            {children}
          </div>
        </Content>

        <Sider width="25%" style={siderStyle}>
          Sider
        </Sider>

      </Layout>

      <Footer style={footerStyle}>
        <Title level={3}>Todos os direitos reservados</Title>
      </Footer>

    </Layout>
  )
}

export default LayoutViewUi;