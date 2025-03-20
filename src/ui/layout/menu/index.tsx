import { BarsOutlined } from "@ant-design/icons";
import '@ant-design/v5-patch-for-react-19';
import { Button, Col, Drawer, DrawerProps, Flex, Image, Menu, Row } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router';
import { URL_YOUTUBE } from "../../../constants";
import Anuncio from "../../anuncio";
import Pallet from "../colorsPalette";
import { useWindowSize } from "../hooks";
import { getUrls } from "./constants";
import { ITheme, TMenuItem } from "./props";

const MenuItens: React.FC<ITheme> = ({ theme, mode, backGroundColor, color }) => {
  const navigate = useNavigate();

  const filter = process.env.NODE_ENV === 'production'
    ? getUrls.filter((data) => data.liberado === true)
    : getUrls;

  const items: TMenuItem[] = filter.map((item) => {
    const lblLabel = process.env.NODE_ENV === 'development' && !item.liberado
      ? item.label + ' - em revisão'
      : item.label;

    return {
      key: item.key,
      label: lblLabel,
      style: {
        color: color
      },
      onClick: () => {
        navigate(item.url); // Buscar a url
      }
    } as TMenuItem
  })

  return (
    <Anuncio>
      <Menu style={{
        backgroundColor: backGroundColor
      }}
        mode={mode}
        items={items}
        selectedKeys={[]}
        theme={theme}
      />
    </Anuncio>
  )
}

const Logo = () => (
  <Anuncio>
    <Link to={'/'}>
      <Image style={{
        height: 50,
      }}
        src="/logo-sem-fundo.png"
        preview={false}
      />
    </Link>
  </Anuncio>
)

const MenuPadrao: React.FC = () => {
  return (
    <Row align={'middle'} justify={"space-around"}
      style={{
        backgroundColor: Pallet.BackGround.principal,
        color: Pallet.Typography.principal,
        minHeight: 60
      }}>
      <Col span={6}>
        <Logo />
      </Col>
      <Col span={10} style={{
      }}>
        <MenuItens
          mode="horizontal"
          theme={"dark"}
          backGroundColor={Pallet.BackGround.principal}
          color={Pallet.Typography.principal}
        />
      </Col>
      <Col span={1}>
      </Col>
    </Row>
  )
}

const MenuUi: React.FC = () => {
  const window = useWindowSize();
  const [isWindow, setIsWindow] = useState(false);

  const [open, setOpen] = useState(false);
  const [placement] = useState<DrawerProps['placement']>('top');

  React.useEffect(() => {
    setIsWindow(window.width >= 600);
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
        <MenuPadrao /> :
        <Row align={"middle"} justify={"space-around"} style={{
          backgroundColor: Pallet.BackGround.principal,
          color: Pallet.Typography.principal,
        }}>
          <Col>
            <Logo />
          </Col>
          <Col>
            <Button style={{
              backgroundColor: Pallet.BackGround.principal,
            }} variant="solid" shape="circle" onClick={showDrawer}>
              <BarsOutlined style={{
                color: Pallet.Typography.principal
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
        style={{
          backgroundColor: Pallet.BackGround.principal,
          color: Pallet.Typography.principal
        }}
      >
        <Flex>
          <MenuItens
            mode="vertical"
            theme={"light"}
            backGroundColor={Pallet.BackGround.principal}
            color={Pallet.Typography.principal}
          />
          <Row>
            <Anuncio>
              <Flex vertical
                style={{
                  marginLeft: 5,
                  marginTop: 15
                }}>
                Redes Socias
                <Row style={{
                  marginTop: 15
                }}>
                  <Link
                    style={{ color: Pallet.Typography.principal }}
                    to={URL_YOUTUBE}
                    target="_blank">
                    YouTube
                  </Link >
                </Row>
              </Flex>
            </Anuncio>
          </Row>
        </Flex>
      </Drawer>
    </>
  );
};

export default MenuUi;