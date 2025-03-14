import { BarsOutlined } from "@ant-design/icons";
import '@ant-design/v5-patch-for-react-19';
import { Button, Col, Drawer, DrawerProps, Flex, Image, Menu, Row } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router';
import Anuncio from "../../anuncio";
import Pallet from "../colorsPalette";
import { useWindowSize } from "../hooks";
import { ITheme, TMenuItem } from "./props";
import { getUrls } from "./constants";

const MenuItens: React.FC<ITheme> = ({ theme, mode, backGroundColor }) => {
  const navigate = useNavigate();
  const items: TMenuItem[] = [
    {
      key: 'noticias',
      label: 'Noticias',
      style: {
        color: Pallet.Typography.secundaria
      },
      onClick: (eve) => {
        getUrls.find(e => {
          if (e.key === eve.key) {
            navigate(`/site/${e.key}`); // Buscar a url
          }
        });
      }
    },
    {
      key: 'quemSomos',
      label: 'Quem Somos',
      style: {
        color: Pallet.Typography.secundaria
      },
      onClick: (eve) => {
        getUrls.find(e => {
          if (e.key === eve.key) {
            navigate(`/site/${e.key}`); // Buscar a url
          }
        });
      }
    }
  ];

  return (
    <Anuncio>
      <Menu style={{
        backgroundColor: backGroundColor
      }}
        mode={mode}
        items={items}
        selectedKeys={[]}
        theme={theme} />
    </Anuncio>
  )
}

const Logo = () => (
  <Anuncio>
    <Link to={'/'}>
      <Image style={{
        height: 50,
      }}
        src="/logo.png"
        preview={false}
      />
    </Link>
  </Anuncio>
)

const MenuUi: React.FC = () => {
  const window = useWindowSize();
  const [isWindow, setIsWindow] = useState(false);

  const [open, setOpen] = useState(false);
  const [placement] = useState<DrawerProps['placement']>('top');

  React.useEffect(() => {
    setIsWindow(window.width >= 400);
  }, [window.width])

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      {isWindow ?
        <Row align={'middle'} justify={"space-around"} style={{
          backgroundColor: Pallet.BackGround.principal,
          color: Pallet.Typography.secundaria,
          minHeight: 60
        }}>
          <Col>
            <Logo />
          </Col>
          <MenuItens
            mode="horizontal"
            theme={"dark"}
            backGroundColor={Pallet.BackGround.principal}
          />
          <Col></Col>
        </Row> :
        <Row align={"middle"} justify={"space-around"} style={{
          backgroundColor: Pallet.BackGround.principal,
          color: Pallet.Typography.secundaria,
        }}>
          <Col>
            <Logo />
          </Col>
          <Col>
            <Button style={{
              backgroundColor: Pallet.BackGround.principal,
            }} variant="solid" shape="circle" onClick={showDrawer}>
              <BarsOutlined style={{
                color: Pallet.Typography.secundaria
              }} />
            </Button>
          </Col>
        </Row >}

      <Drawer
        title="Emadaio Games"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <Flex>
          <MenuItens
            mode="vertical"
            theme={"light"}
          />
        </Flex>
      </Drawer>
    </>
  );
};

export default MenuUi;