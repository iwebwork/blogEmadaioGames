import { Col, Menu, Row } from "antd";
import Pallet from "../colorsPalette";
import { TMenuItem } from "./props";
import { Image } from "antd";

const items: TMenuItem[] = [
  {
    key: '1',
    label: 'Noticias',
    style: { color: Pallet.Typography.secundaria }
  }
];

const MenuUi: React.FC = () => {
  return (
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
      <Menu style={{
        backgroundColor: Pallet.BackGround.principal
      }}
        mode="horizontal"
        items={items}
        selectedKeys={[]}
        theme="dark" />
      <Col></Col>
    </Row>
  );
};

export default MenuUi;