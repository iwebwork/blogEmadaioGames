import { Flex, Typography } from 'antd';
import React from "react";

const { Title, Paragraph } = Typography;

const QuemSomosView: React.FC = () => {

  return (
    <>
      <Flex justify="center">
        <Title>
          Seja Bem Vindo ao Canal Emadaio Games
        </Title>
      </Flex>

      <Paragraph>
        Temos o objetivo de trazer Notícas e Curiosidades no mundo dos Games, dos mais variados tipos.
      </Paragraph>
    </>
  )
}

export default QuemSomosView;