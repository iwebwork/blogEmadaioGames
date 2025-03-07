import { Col, Menu, MenuProps, Row } from "antd";
import { TMenuItem } from "./props";

const items: TMenuItem[] = [
  {
    label: 'Noticias',
    key: 'noticias',
  }
];

const MenuUi: React.FC = () => {

  return (
    <Row justify={"space-between"} style={{}}>
      <Col style={{}}>Logo</Col>
      <Col>
        <Menu style={{}} mode="horizontal" items={items} />
      </Col>
      <Col></Col>
    </Row >

  );
};

export default MenuUi;