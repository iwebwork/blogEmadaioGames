import { Card, List, Row, Typography } from 'antd';
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
      <Card
        variant="outlined"
        style={{
          maxWidth: 800,
          minWidth: 400,
          backgroundColor: Pallet.BackGround.secundaria,
          border: 0
        }}
      >
        <Row>
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
        </Row>
        <Row>
          <Paragraph>
            {date}
          </Paragraph>
        </Row>
      </Card>
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
          var title = item.title;

          if (!item.liberado) {
            title += ' => pendente'
          }

          return (<List.Item>
            <Corpo id={item.id} title={title} date={item.date} />
          </List.Item>)
        }}
      />
    </Row>
  )
}

export default NoticiasView;