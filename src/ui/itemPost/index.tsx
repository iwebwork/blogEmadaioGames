import { useNavigate } from "react-router";
import { IData } from "../../hooks/api/props";
import { Flex, Typography } from "antd";
import Pallet from "../layout/colorsPalette";
import { formatarDataPorExtenso } from "../../hooks/comuns";
import Anuncio from "../anuncio";

const { Link, Title, Paragraph } = Typography;

const ItemPostUi: React.FC<IData> = (props) => {
  const navigate = useNavigate();
  const { id, title, date } = props;

  return (
    <Flex
      vertical
      justify='flex-start'
      align='flex-start'
      style={{
        backgroundColor: Pallet.BackGround.secundaria,
      }}
    >
      <Anuncio>
        <Link
          style={{
            color: Pallet.Typography.secundaria
          }}
          onClick={() => {
            navigate(`/site/post/${id}`);
          }}
        >
          <Title underline level={4}>
            {title}
          </Title>
        </Link >
      </Anuncio>
      <Paragraph>
        {formatarDataPorExtenso(date)}
      </Paragraph>
    </Flex>
  )
}

export default ItemPostUi;