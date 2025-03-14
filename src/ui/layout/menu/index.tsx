import { BarsOutlined, YoutubeOutlined } from "@ant-design/icons";
import '@ant-design/v5-patch-for-react-19';
import { Button, Col, Divider, Drawer, DrawerProps, Flex, Image, List, Menu, Popover, Row, Typography } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router';
import Anuncio from "../../anuncio";
import Pallet from "../colorsPalette";
import { useWindowSize } from "../hooks";
import { ITheme, TMenuItem } from "./props";
import { getUrls } from "./constants";
import { URL_YOUTUBE } from "../../../constants";

const { Paragraph } = Typography;

const MenuItens: React.FC<ITheme> = ({ theme, mode, backGroundColor, color }) => {
  const navigate = useNavigate();

  const navigateMenu = (key: string) => {
    getUrls.find(e => {
      if (e.key === key) {
        navigate(`/site/${e.key}`); // Buscar a url
      }
    });
  }

  const items: TMenuItem[] = [
    {
      key: 'noticias',
      label: 'Noticias',
      style: {
        color: color,
      },
      onClick: (eve) => {
        navigateMenu(eve.key);
      }
    },
    {
      key: 'quemSomos',
      label: 'Quem Somos',
      style: {
        color: color
      },
      onClick: (eve) => {
        navigateMenu(eve.key);
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
        src="/logo.png"
        preview={false}
      />
    </Link>
  </Anuncio>
)

export const ButtonYouTubeUi: React.FC = () => {
  const onClickYouTube = () => {
    window.open(URL_YOUTUBE, '_blank', 'noopener,noreferrer')
  }

  return (
    <Anuncio>
      <Popover content={'YouTube'} placement="right">
        <Button style={{
          height: 25,
          width: 25,
          backgroundColor: Pallet.Typography.terciaria,
          borderColor: Pallet.Typography.secundaria
        }}
          variant="solid"
          icon={<YoutubeOutlined />}
          onClick={onClickYouTube}
        />
      </Popover>
    </Anuncio>
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
        </Row> :
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
      >
        <Flex>
          <MenuItens
            mode="vertical"
            theme={"light"}
            color={Pallet.Typography.secundaria}
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
                    style={{ color: Pallet.Typography.secundaria }}
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