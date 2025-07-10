import { Flex, Row } from "antd";
import Sider from "antd/es/layout/Sider";
import React, { PropsWithChildren, useState } from "react";
import Pallet from "../colorsPalette";
import { useWindowSize } from "../hooksUi";

const siderStyle: React.CSSProperties = {
  marginTop: 20,
  marginLeft: 10,
  marginRight: 30,
  color: Pallet.Typography.principal,
  backgroundColor: Pallet.BackGround.secundaria,
  display: 'flex',
  flex: 1
};

const SiderLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const window = useWindowSize();
  const [isWindow, setIsWindow] = useState(false);

  React.useEffect(() => {
    setIsWindow(window.width >= 800);
  }, [window.width])

  return (<>
    {isWindow ?
      <Sider style={siderStyle} >
        {children}
      </Sider > :
      <Flex justify={"center"} style={{ display: 'flex', flex: 1, marginTop: 20, marginBottom: 20 }}>
        {children}
      </Flex >
    }
  </>

  )
}

export default SiderLayout;