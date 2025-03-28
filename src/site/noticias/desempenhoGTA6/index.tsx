import React from "react";
import { Typography } from "antd";

const { Title, Paragraph, Text } = Typography

const desempenhoGTA6Ui: React.FC = () => {
  return (
    <>
      <Paragraph>
        <Title>
          Possível desempenho do GTA 6 foi vazado
        </Title>
        De acordo com Mike York, ex-animador da Rockstar Games, GTA 6 pode não atingir 60 FPS no lançamento para PlayStation 5 e Xbox Series X|S. Em uma entrevista no canal Kiwi Talkz, que foi removida posteriormente, York sugeriu que o jogo provavelmente rodará a 30 FPS estáveis nos consoles, sem problemas de desempenho. Ele mencionou ainda que, no futuro, uma versão otimizada para PC pode atingir 60 FPS, com o auxílio de novas placas de vídeo e melhorias gráficas.
      </Paragraph>

      <Paragraph>
        <Text strong >
          “Eu acredito que, no lançamento, o jogo não vai rodar a 60 FPS nativos nos consoles padrão. Talvez no PS5 Pro, mas ainda tenho minhas dúvidas”, afirmou. “Se houver 60 FPS, será por algum tipo de upscaling, como a Sony está fazendo.” Apesar de suas declarações, York deixou claro que não está envolvido no desenvolvimento atual do jogo e que suas observações são baseadas em suas experiências passadas na Rockstar, onde trabalhou até 2017, participando de projetos como GTA 5 e Red Dead Redemption 2
        </Text>
      </Paragraph>
    </>
  )
}

export default desempenhoGTA6Ui;