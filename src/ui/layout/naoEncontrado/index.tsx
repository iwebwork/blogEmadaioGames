import { Empty, Typography } from "antd";
import React from "react";

const naoEncontrado: React.FC = () => {
  return (
    <Empty
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      description={<Typography.Text>
        Post não foi encontrado
      </Typography.Text>}
    />
  )
}

export default naoEncontrado;