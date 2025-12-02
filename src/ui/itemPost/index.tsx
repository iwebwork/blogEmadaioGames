import { useNavigate } from "react-router";
import { IData, IPost } from "../../hooks/api/props";
import { Col, Flex, Row, Typography, Image } from "antd";
import Pallet from "../layout/colorsPalette";
import { formatarDataPorExtenso } from "../../hooks/comuns";
import Anuncio from "../anuncio";
import { useState } from "react";
import React from "react";
import { IItems } from "./props";

const { Link, Title, Paragraph } = Typography;

const ItemPostUi: React.FC<IData> = (props) => {
  const navigate = useNavigate();
  const { id, title, date } = props;

  return (
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
      <Paragraph>
        {formatarDataPorExtenso(date)}
      </Paragraph>
    </Anuncio>
  )
}

const ItemUi: React.FC<IItems> = ({ item }) => {

  const [post, setPost] = useState<IPost>(item);

  React.useEffect(() => {
    var imageBase = `/logo.png`;
    if (item.image) {
      imageBase = `${process.env.REACT_APP_URL_API}/api/posts/getImagem/${item.id}`;
    }

    var title = item.title;

    if (item.liberado === 2) {
      title += ' => pendente'
    }

    setPost(prevPost => ({
      ...prevPost,
      image: imageBase,
    }));

    return;
  }, [item])

  return (<Flex>
    <Image preview={false} src={post.image} style={{
      padding: 5,
      maxWidth: 150,
      marginRight: 10,
      minWidth: 200,
      borderRadius: '4px'
      // backgroundColor: Pallet.BackGround.principal
    }} />
    <ItemPostUi id={post.id} name={post.name} title={post.title} date={post.date} />
  </Flex>)
}

export default ItemUi;