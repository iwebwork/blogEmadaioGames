import { BarsOutlined } from "@ant-design/icons";
import '@ant-design/v5-patch-for-react-19';
import { Button, Col, Drawer, DrawerProps, Flex, Image, Menu, Row } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { urls } from "../../../data/communs";
import Pallet from "../colorsPalette";
import { useWindowSize } from "../hooks/window";
import { ITheme, TMenuItem } from "./props";

const MenuItens: React.FC<ITheme> = ({ theme, mode, backGroundColor }) => {
  const navigate = useNavigate();

  const items: TMenuItem[] = [
    {
      key: '1',
      label: 'Noticias',
      onClick: (eve) => {
        navigate(urls[Number.parseInt(eve.key) - 1]);
      }
    }
  ];

  return (
    <Menu style={{
      //backgroundColor: Pallet.BackGround.principal
      backgroundColor: backGroundColor
    }}
      mode={mode}
      items={items}
      selectedKeys={[]}
      theme={theme} />
  )
}

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
            <Image style={{
              height: 50,
            }}
              src="/logo.png"
              preview={false}
            />
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
            <Image style={{
              height: 50,
            }}
              src="/logo.png"
              preview={false}
            />
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