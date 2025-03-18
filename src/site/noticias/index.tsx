import { Avatar, Card, Col, Flex, Image, List, Row, Typography } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { getNoticias } from '../../hooks/api';
import { IData, IPost } from '../../hooks/api/props';
import Anuncio from '../../ui/anuncio';
import Pallet from '../../ui/layout/colorsPalette';
import { HoverLink } from '../../ui/style';

const { Link, Title, Paragraph } = Typography;

type PaginationPosition = 'top' | 'bottom' | 'both';

type PaginationAlign = 'start' | 'center' | 'end';

const Corpo: React.FC<IData> = (props) => {
  const navigate = useNavigate();
  const { id, title, date } = props;

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
            navigate(`/site/post/${id}`);
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

const NoticiasView: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>();
  const [position] = useState<PaginationPosition>('bottom');
  const [align] = useState<PaginationAlign>('center');

  const fetchNoticias = async () => {

    const result = await getNoticias();

    if (!result)
      return;

    setPosts(result)
  }

  React.useEffect(() => {
    fetchNoticias();
  }, [])

  return (
    <Row justify={'center'}>
      <List
        pagination={{ position, align }}
        dataSource={posts}
        renderItem={(item: IPost) => {
          var image = `/assets/img/erro.png`;

          if (item.image) {
            image = `/assets/img/${item.image}`;
          }

          var title = item.title;

          if (!item.liberado) {
            title += ' => pendente'
          }

          return (<List.Item>
            <Row>
              <Col>
                <Image width={100} src={image} style={{
                  padding: 20
                }} />
              </Col>
              <Col>
                <Corpo id={item.id} title={title} date={item.date} />
              </Col>
            </Row>
            {/* <List.Item.Meta
              style={{
                maxWidth: '25%',
                backgroundColor: 'blue'
              }}
              avatar={<Avatar src={image} size={'default'} />}
            />
            <Corpo id={item.id} title={title} date={item.date} /> */}
          </List.Item>)
        }}
      />
    </Row>
  )
}

export default NoticiasView;