import { Flex, List, Typography } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { getNoticias } from '../../hooks/api';
import { IData, IPost } from '../../hooks/api/props';
import Pallet from '../../ui/layout/colorsPalette';
import Anuncio from '../../ui/anuncio';

const { Link, Paragraph } = Typography;

const Corpo: React.FC<IData> = (props) => {
  const navigate = useNavigate();
  const { id, title, date } = props;

  return (
    <Flex key={id} wrap justify='center' gap="middle" style={{ display: 'flex', flex: 1 }}>
      <Anuncio>
        <Link
          underline
          style={{ color: Pallet.Typography.principal }
          }
          onClick={() => {
            navigate(`/site/post/${id}`);
          }} >
          {title}
        </Link >
      </Anuncio>
      <Paragraph>
        {date}
      </Paragraph>

    </Flex >
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
      dataSource={posts}
      renderItem={(item) => (
        <List.Item>
          <Corpo id={item.id} title={item.title} date={item.date} />
        </List.Item>
      )}
    />
  )
}

export default NoticiasView;