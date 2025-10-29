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

const MenuItens: React.FC<ITheme> = ({ theme, mode, backGroundColor, color, itens }) => {
  const navigate = useNavigate();
  const [menu] = useState<IMenu[]>(itens);

  const items: TMenuItem[] = menu.map((item) => {
    const lblLabel = item.liberado === 2
      ? item.label + ' - em revisão'
      : item.label;

    return {
      key: item.id,
      label: lblLabel,
      style: {
        color: color
      },
      onClick: () => {
        var url = item.url;

        if (url.includes('blog'))
          url += `?tipoPostId=${item.tipoPostId}`;

        navigate(url); // Buscar a url
        window.location.reload();
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

const MenuPadrao: React.FC<MenuUiProps> = ({ itens }) => {
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
          itens={itens}
        />
      </Col>
      <Col span={1}>
      </Col>
    </Row>
  )
}

const MenuMobile: React.FC<MenuUiProps> = ({ itens }) => {
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
        padding: 5
      }}>
        <Col>
          <Logo />
        </Col>
        <Col>
          <Button style={{
            backgroundColor: Pallet.BackGround.principal,
          }} variant="solid" shape="round" onClick={showDrawer}>
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
        <div key={Math.random()} onClick={onClose}
        >
          <Flex>
            <MenuItens
              mode="vertical"
              theme={"light"}
              backGroundColor={Pallet.BackGround.principal}
              color={Pallet.Typography.principal}
              itens={itens}
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
        </div>
      </Drawer>
    </>
  )
}

interface MenuUiProps {
  itens: IMenu[]
}

const MenuUi: React.FC<MenuUiProps> = (props) => {
  const window = useWindowSize();
  const [isWindowDesktop, setIsWindowDesktop] = useState<boolean>(false);

  React.useEffect(() => {
    setIsWindowDesktop(window.width >= 600);
  }, [window.width])

  return (
    <>
      {isWindowDesktop
        ? <MenuPadrao {...props} />
        : <MenuMobile {...props} />
      }
    </>
  );
};

export default MenuUi;