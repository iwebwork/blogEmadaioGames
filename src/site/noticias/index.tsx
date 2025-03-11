import { Flex, List, Typography } from 'antd';
import React, { useState } from 'react';
import noticias, { IData } from '../../data/noticias';
import Pallet from '../../ui/layout/colorsPalette';

const { Link } = Typography;

const NoticiasView: React.FC = () => {
  const [posts] = useState<IData[]>(noticias);

  return (
    <List
      dataSource={posts}
      renderItem={(item) => (
        <List.Item>
          <Flex justify='space-evenly' align='center' style={{ display: 'flex', flex: 1 }}>
            <Link underline style={{ color: Pallet.Typography.principal }} href={'https://ant.design/docs/react/introduce#links'} >
              {item.title}
            </Link>
            <p style={{ fontSize: 12 }}>
              {item.date}
            </p>
          </Flex>
        </List.Item>
      )}
    />

  )

}

export default NoticiasView;