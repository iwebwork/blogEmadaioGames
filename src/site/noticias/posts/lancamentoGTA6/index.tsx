import React from "react";
import PostUi from "../../../../ui/layout/post"
import { Typography } from "antd";

const { Title, Paragraph, Text } = Typography

const lancamentoGTA6Ui: React.FC = () => {
  return (
    <PostUi>

      <Paragraph>
        <Title>
          Previsão de Lançamento do GTA 6
        </Title>
        A expectativa em torno do lançamento de GTA 6 continua crescendo. O próximo relatório financeiro da Take-Two Interactive, previsto para o dia 6 de fevereiro de 2025, pode revelar novidades sobre o jogo, como um possível novo trailer ou até mesmo a data oficial de lançamento. Vale destacar que o jogo segue sendo mantido em total segredo pela Rockstar, que liberou apenas um trailer em dezembro de 2023 e desde então não fez mais nenhuma declaração oficial. Enquanto isso, rumores e supostos vazamentos dominam as redes sociais e as discussões da comunidade.
      </Paragraph>

      <Paragraph>
        <Title>
          POSSÍVEL VAZAMENTO DE DATA GERA ALVOROÇO ENTRE OS FÃS
        </Title>
        De acordo com dados divulgados pela loja de games XUruguay, o novo título da famosa franquia da Rockstar Games pode ser lançado em 17 de setembro de 2025, marcando 12 anos desde o lançamento de GTA 5. Embora a data ainda não tenha sido confirmada oficialmente pela desenvolvedora, ela coincide com a previsão da Take-Two Interactive de lançar o jogo no outono de 2025. A listagem foi rapidamente retirada do site, mas a informação já havia se espalhado rapidamente entre os fãs. Após a repercussão, a XUruguay publicou um comunicado dizendo que a data foi um erro interno, baseado apenas em informações públicas disponíveis na internet, e não em dados confidenciais.
      </Paragraph>

      <Paragraph>
        <Text strong>
          “Como todos os fãs, estamos super entusiasmados e na expectativa pelo lançamento de GTA 6, tomando como referência o lançamento do jogo anterior em 17 de setembro de 2013. Não foi nossa intenção causar confusão e queremos esclarecer que não recebemos nenhuma informação oficial das marcas sobre a data de lançamento do jogo.”
        </Text>
      </Paragraph>
    </PostUi>
  )
}

export default lancamentoGTA6Ui;