import { Row } from "antd";
import Sider from "antd/es/layout/Sider";
import React, { PropsWithChildren, useState } from "react";
import Pallet from "../colorsPalette";
import { useWindowSize } from "../hooks/window";

const siderStyle: React.CSSProperties = {
  marginTop: 20,
  color: Pallet.Typography.principal,
  backgroundColor: Pallet.BackGround.secundaria,
};

const SiderLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const window = useWindowSize();
  const [isWindow, setIsWindow] = useState(false);

  React.useEffect(() => {
    setIsWindow(window.width >= 800);
  }, [window.width])

  return (<>
    {isWindow ?
      <Sider width="20%" style={siderStyle} >
        <Row style={{ display: 'flex', flex: 1, position: 'fixed' }}>
          {children}
        </Row >
      </Sider > :
      <Row justify={"center"} style={{ display: 'flex', flex: 1, marginTop: 20, marginBottom: 20 }}>
        {children}
      </Row >}
  </>

  )
}

export default SiderLayout;