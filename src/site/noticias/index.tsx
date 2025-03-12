import { Col, Flex, List, Row, Typography } from 'antd';
import React, { useState } from 'react';
import noticias from '../../data/noticias';
import Pallet from '../../ui/layout/colorsPalette';
import { ICorpo } from './props';
import { IData } from '../../data/noticias/props';
import { useNavigate } from 'react-router';

const { Link, Paragraph } = Typography;

const Corpo: React.FC<IData> = (props) => {
  const navigate = useNavigate();
  const { id, title, date } = props;

  return (
    <Flex key={id} wrap justify='center' gap="middle" style={{ display: 'flex', flex: 1 }}>
      <Link underline style={{ color: Pallet.Typography.principal }}
        onClick={() => {
          navigate(`/site/post/${id}`);
        }} >
        {title}
      </Link>
      <Paragraph>
        {date}
      </Paragraph>
    </Flex>
  )
}

const NoticiasView: React.FC = () => {
  const [posts] = useState<IData[]>(noticias);

  return (
    <List
      dataSource={posts}
      renderItem={(item) => (
        <List.Item style={{
          backgroundColor: Pallet.BackGround.secundaria
        }}>
          <Corpo id={item.id} title={item.title} date={item.date} />
        </List.Item>
      )}
    />
  )
}

export default NoticiasView;