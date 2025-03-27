import { Flex, Image, Row, Typography } from "antd";
import React from "react";
import PostUi from "../../../../ui/layout/post";

const { Paragraph, Title } = Typography;

const ForzaPS5Ui: React.FC = () => {
  return (
    <>
      <Flex>
        <Title>Preparem os motores! Forza Horizont 5,está prestes a acelerar no Playstation 5</Title>
      </Flex>

      <Image
        src='/assets/img/forza_5JLhr0u.png' />

      <Row>
        <Paragraph>
          <Title level={4}>Um Fenômeno Mundial</Title>
          Originalmente lançado como um exclusivo para Xbox e PC, Forza Horizon 5 rapidamente se destacou como um fenômeno global. O jogo conquistou tanto a crítica quanto os jogadores graças à sua jogabilidade envolvente, gráficos deslumbrantes e um mundo aberto vasto. Essas características o consagraram como um dos melhores jogos de corrida da atualidade. O sucesso do jogo é evidente pelos três troféus que conquistou no The Game Awards, um dos eventos mais prestigiados do mundo dos games.
        </Paragraph>

        <Paragraph>
          <Title level={4}>Disponibilidade no PlayStation 5</Title>
          A Playground Games, desenvolvedora responsável por Forza Horizon 5, anunciou que o jogo estará disponível para PlayStation 5 no segundo trimestre de 2025. Esta é uma excelente notícia para os fãs de corrida que são proprietários do console da Sony, pois eles finalmente poderão experimentar essa obra-prima.
        </Paragraph>


        <Paragraph>
          <Title level={4}>Parceria de Desenvolvimento</Title>
          A versão para PlayStation 5 está sendo desenvolvida através de uma colaboração cuidadosa entre a Playground Games e a Panic Button, uma empresa renomada por sua experiência na adaptação de jogos para diferentes plataformas. Esta parceria visa garantir que a qualidade e o conteúdo do jogo sejam mantidos, proporcionando aos jogadores do PlayStation 5 uma experiência de corrida impecável.
        </Paragraph>


        <Paragraph>
          <Title level={4}>Conteúdo Completo para Jogadores de PlayStation 5</Title>
          Os jogadores do PlayStation 5 podem ficar tranquilos, pois a versão do jogo para o console da Sony incluirá exatamente o mesmo conteúdo da versão para Xbox. Isso significa que todas as expansões e conteúdos adicionais já lançados estarão disponíveis, garantindo que os jogadores tenham acesso a tudo o que torna Forza Horizon 5 um jogo tão especial.
        </Paragraph>

        Com essa expansão para uma nova plataforma, Forza Horizon 5 está pronto para conquistar ainda mais fãs ao redor do mundo, solidificando sua posição como um dos melhores e mais emocionantes jogos de corrida da atualidade.
      </Row>
    </>
  )
}

export default ForzaPS5Ui;