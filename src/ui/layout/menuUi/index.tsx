import { BarsOutlined } from "@ant-design/icons";
import '@ant-design/v5-patch-for-react-19';
import { Button, Col, Drawer, DrawerProps, Flex, Image, Menu, Row } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router';
import { URL_YOUTUBE } from "../../../constants";
import Anuncio from "../../anuncio";
import Pallet from "../colorsPalette";
import { useWindowSize } from "../hooksUi";
import { IMenu, ITheme, TMenuItem } from "./props";
import { fetchMenu } from "./model";

const MenuItens: React.FC<ITheme> = ({ theme, mode, backGroundColor, color }) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState<IMenu[]>([]);

  const buscarMenu = async () => {
    const data = await fetchMenu() || [];
    setMenu(data);
  }

  React.useEffect(() => {
    buscarMenu();
  }, [])

  React.useEffect(() => {

  }, [menu]);

  const filter = process.env.NODE_ENV === 'production'
    ? menu.filter((data) => data.liberado === 1)
    : menu;

  const items: TMenuItem[] = filter.map((item) => {
    const lblLabel = process.env.NODE_ENV === 'development' && item.liberado === 2
      ? item.label + ' - em revisão'
      : item.label;

    return {
      key: item.id,
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
        backgroundColor: backGroundColor,
        justifyContent: 'center'
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
        paddingLeft: 20
      }}
        src="/logo.png"
        preview={false}
      />
    </Link>
  </Anuncio>
)

const MenuPadrao: React.FC = () => {
  return (
    <Row align={'middle'} justify={"space-between"}
      style={{
        backgroundColor: Pallet.BackGround.principal,
        color: Pallet.Typography.principal,
        minHeight: 60
      }}>
      <Col span={2}>
        <Logo />
      </Col>
      <Col span={16} style={{
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

const MenuMobile: React.FC = () => {
  const [placement] = useState<DrawerProps['placement']>('top');
  const [isOpenMenuModible, setIsOpenMenuModible] = useState<boolean>(false);

  const onClose = () => {
    setIsOpenMenuModible(false);
  };

  const showDrawer = () => {
    setIsOpenMenuModible(true);
  };

  React.useEffect(() => {
  }, [isOpenMenuModible])

  return (
    <>
      <Row align={"middle"} justify={"space-between"} style={{
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
        </Col >
      </Row >
      <Drawer
        title="Emadaio Games"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={isOpenMenuModible}
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
  )
}

const MenuUi: React.FC = () => {
  const window = useWindowSize();
  const [isWindowDesktop, setIsWindowDesktop] = useState<boolean>(false);

  React.useEffect(() => {
    setIsWindowDesktop(window.width >= 600);
  }, [window.width])

  return (
    <>
      {isWindowDesktop ?
        <MenuPadrao /> :
        <MenuMobile />
      }
    </>
  );
};

export default MenuUi;