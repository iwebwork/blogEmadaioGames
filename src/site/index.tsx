import { Navigate, Route, Routes } from "react-router"
import NoticiasView from "./noticias"
import { Col, Row, Image } from "antd"
import LayoutViewUi from "../ui/layout"

const Sider: React.FC = () => {
  return (
    <Row justify={'center'}>
      <Col span={18}>
        <Image width={200}
          src='data:image/png;base64,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' />
      </Col>
    </Row>
  )
}

const SiteView: React.FC = () => {
  return (
    <LayoutViewUi
      SiderChildrenRight={<Sider />}
    >
      <Routes>
        <Route index path='/noticias' element={<NoticiasView />} />
        <Route index path='*' element={<Navigate to={'/site/noticias'} />} />
      </Routes>
    </LayoutViewUi>
  )
}

export default SiteView;