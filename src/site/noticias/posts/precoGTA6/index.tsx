import React from "react";
import PostUi from "../../../../ui/layout/post"
import { Typography } from "antd";

const { Title, Paragraph } = Typography

const precoGTA6Ui: React.FC = () => {
  return (
    <PostUi>
      <Title>
        Possível preço do GTA 6 foi revelado
      </Title>

      <Paragraph>
        Analistas indicam que GTA 6 será lançado em 2025 com preço de até US$ 100, antecipando uma possível mudança nos padrões de precificação com o lançamento do novo título da Rockstar e Take-Two Interactive. Atualmente, os jogos costumam ser lançados por valores entre US$ 60 e US$ 70. Esse aumento de preço pode desencadear uma reação em cadeia, com outros estúdios seguindo o mesmo caminho e elevando os preços de seus lançamentos. Vale destacar que a Take-Two tem sido uma influenciadora de tendências na indústria, sendo uma das pioneiras ao aumentar o preço dos jogos de US$ 60 para US$ 70 em 2020, justificando a mudança pela transição para a nova geração de consoles.
      </Paragraph>

      <Paragraph>
        Rumores também apontam que GTA 6 pode ter seu modo online vendido separadamente no lançamento. A informação, compartilhada pelo insider Tez2 nos GTA Forums, sugere que a Rockstar planeja adotar a mesma estratégia usada com GTA Online e Red Dead Online, que já são vendidos de forma independente.
      </Paragraph>
    </PostUi>
  )
}

export default precoGTA6Ui;