import { Card, List, Row, Typography } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { getNoticias } from '../../hooks/api';
import { IData, IPost } from '../../hooks/api/props';
import Anuncio from '../../ui/anuncio';
import Pallet from '../../ui/layout/colorsPalette';
import styled from '@emotion/styled';

const { Link } = Typography;

const HoverLink = styled.div(() => {
  return {
    borderRadius: 6,
    ':hover': {
      backgroundColor: Pallet.Typography.terciaria
    }
  }
});

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
          <HoverLink>
            <Link
              style={{
                color: Pallet.Typography.secundaria
              }}
              onClick={() => {
                navigate(`/site/post/${id}`);
              }}
            >
              {title}
            </Link >
          </HoverLink>
        </Row>
        <Row>
          {date}
        </Row>
      </Card>
    </Anuncio>
  )
}

const NoticiasView: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>();

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
    <List
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center'
      }}
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
  )
}

export default NoticiasView;