import { Button, Divider, Empty, Typography } from "antd";
import React from "react";
import Pallet from "../colorsPalette";
import { useNavigate } from "react-router";

const NaoEncontradoUi: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Empty
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      description={<>
        <Typography.Text>
          Post não foi encontrado
        </Typography.Text>
        <Divider />
        <Button
          style={{
            backgroundColor: Pallet.BackGround.principal,
            color: Pallet.Typography.principal
          }}
          type="primary" size={"large"}
          onClick={() => navigate(-1)}
        >Voltar</Button>
      </>
      }
    />
  )
}

export default NaoEncontradoUi;