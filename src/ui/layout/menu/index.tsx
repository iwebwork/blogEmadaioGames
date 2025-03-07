import { Button, Col, Menu, Row } from "antd";
import { TMenuItem } from "./props";
import Pallet from "../colorsPalette";
import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons'

const items: TMenuItem[] = [
  {
    label: 'Noticias',
    key: 'noticias',
    style: { color: Pallet.Typography.secundaria }
  }
];

const MenuUi: React.FC = () => {
  return (
    <Row justify={"space-between"} style={{
      backgroundColor: Pallet.BackGround.principal,
      color: Pallet.Typography.secundaria,
    }}>
      <Col style={{}}>Logo</Col>
      <Col>

        <Menu style={{
          backgroundColor: Pallet.BackGround.principal
        }}
          mode="vertical"
          items={items}
          theme="dark" />
      </Col>
      <Col></Col>
    </Row >

  );
};

export default MenuUi;