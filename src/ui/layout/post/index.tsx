import { Flex } from "antd";
import React from "react";
import { PropsWithChildren } from "react"

const PostUi: React.FC<PropsWithChildren> = ({ children }) => {
  return (<Flex>
    {children}
  </Flex>)
}

export default PostUi;