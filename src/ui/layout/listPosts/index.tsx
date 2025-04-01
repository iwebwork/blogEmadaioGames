import { useNavigate } from "react-router";
import { IData } from "../../../hooks/api/props";
import Anuncio from "../../anuncio";
import { Flex, Typography } from "antd";
import Pallet from "../colorsPalette";

const { Link, Title, Paragraph } = Typography;

const ListItemPostUi: React.FC<IData> = (props) => {
  const navigate = useNavigate();
  const { tipo, title, date, name } = props;

  return (
    <Anuncio>
      <Flex
        vertical
        justify='flex-start'
        align='flex-start'
        style={{
          backgroundColor: Pallet.BackGround.secundaria,
        }}
      >
        <Link
          style={{
            color: Pallet.Typography.secundaria
          }}
          onClick={() => {
            navigate(`/site/post/${tipo}/${name}`);
          }}
        >
          <Title underline level={4}>
            {title}
          </Title>
        </Link >
        <Paragraph>
          {date}
        </Paragraph>
      </Flex>
    </Anuncio >
  )
}

export default ListItemPostUi;