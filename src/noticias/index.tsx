import { Col, List, Row } from 'antd';
import Title from 'antd/es/typography/Title';
import React, { useState } from 'react';
import { posts } from '../data';
import Paragraph from 'antd/es/typography/Paragraph';
import LinkUi from '../ui/link';
import { IDataType } from './props';

const NoticiasView: React.FC = () => {
  const [data, setData] = useState<IDataType[]>();

  const fetchData = () => {
    setData(posts)
  }

  React.useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <List
        header={<Title>Lista de Noticias</Title>}
        dataSource={data}
        renderItem={(item) => (
          <List.Item style={{}}>
            <Row justify="space-between" style={{ display: 'flex', flex: 1 }}>
              <Col span={18}>
                <Paragraph>
                  <LinkUi url={'https://ant.design/docs/react/introduce#links'}>
                    {item.title}
                  </LinkUi>
                </Paragraph>
              </Col>
              <Col>
                {item.date}
              </Col>
              <Col>
              </Col>
            </Row>
          </List.Item >
        )}
      />

    </>
  )
}

export default NoticiasView;