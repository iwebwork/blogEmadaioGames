import { Col, Flex, List, Row, Typography } from 'antd';
import React, { useState } from 'react';
import noticias from '../../data/noticias';
import Pallet from '../../ui/layout/colorsPalette';
import { ICorpo } from './props';
import { IData } from '../../data/noticias/props';

const { Link, Paragraph } = Typography;

const Corpo: React.FC<ICorpo> = ({ title, date }) => {
  return (
    <Flex wrap justify='center' gap="middle" style={{ display: 'flex', flex: 1 }}>
      <Link underline style={{ color: Pallet.Typography.principal }} href={'https://ant.design/docs/react/introduce#links'} >
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
          <Corpo title={item.title} date={item.date} />
        </List.Item>
      )}
    />
  )
}

export default NoticiasView;