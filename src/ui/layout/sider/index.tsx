import { PropsWithChildren } from "react";
import Pallet from "../colorsPalette";
import Sider from "antd/es/layout/Sider";

const siderStyle: React.CSSProperties = {
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  color: Pallet.Typography.principal,
  backgroundColor: Pallet.BackGround.secundaria
};

const SiderLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Sider width="20%" style={siderStyle}>
      {children}
    </Sider>
  )
}

export default SiderLayout;