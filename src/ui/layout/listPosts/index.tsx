import { useNavigate } from "react-router";
import { IData } from "../../../hooks/api/props";
import Anuncio from "../../anuncio";
import { Flex, Typography } from "antd";
import Pallet from "../colorsPalette";
import { HoverLink } from "../../style";

const { Link, Title, Paragraph } = Typography;

const ListPostUi: React.FC<IData> = (props) => {
  const navigate = useNavigate();
  const { id, tipo, title, date } = props;

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
            navigate(`/site/post/${tipo}/${id}`);
          }}
        >
          <Title level={4}>
            <HoverLink>
              {title}
            </HoverLink>
          </Title>
        </Link >
        <Paragraph>
          {date}
        </Paragraph>
      </Flex>
    </Anuncio >
  )
}

export default ListPostUi;