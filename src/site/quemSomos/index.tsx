import { YoutubeOutlined } from "@ant-design/icons";
import { Button, Flex, Typography } from 'antd';
import React from "react";
import Anuncio from "../../ui/anuncio";
import { ButtonYouTubeUi } from "../../ui/layout/menu";

const { Title, Paragraph } = Typography;

const QuemSomosView: React.FC = () => {

  const onClickYouTube = () => {
    window.open('https://www.youtube.com/@EmadaioGames', '_blank', 'noopener,noreferrer')
  }

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