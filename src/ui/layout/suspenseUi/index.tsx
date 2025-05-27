import { Flex, Spin, } from "antd";
import React, { PropsWithChildren, Suspense } from "react"

const SuspenseUi: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Suspense fallback={
      <Flex justify="center">
        <Spin tip="Loading" size="large" fullscreen>
          Loading...
        </Spin>
      </Flex>
    }>
      {children}
    </Suspense>
  )
}

export default SuspenseUi;