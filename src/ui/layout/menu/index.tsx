import { Col, Menu, MenuProps, Row } from "antd";
import { MailOutlined } from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: 'Noticias',
    key: 'noticias',
  }
];

const MenuUi: React.FC = () => {

  return (
    <Row justify={"space-between"}>
      <Col>Logo</Col>
      <Col>
        <Menu mode="horizontal" items={items} />
      </Col>
    </Row>

  );
};

export default MenuUi;