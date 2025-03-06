import { Col, Divider, List, Row, Space } from 'antd';
import Title from 'antd/es/typography/Title';
import React, { useState } from 'react';

interface IDataType {
  title: string;
  date: string;
}

const NoticiasView: React.FC = () => {
  const [data, setData] = useState<IDataType[]>();

  const fetchData = () => {
    const data = new Date().toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });

    setData([
      {
        title: 'Noticia ' + Math.random().toString(),
        date: data
      },
      {
        title: 'Noticia ' + Math.random().toString(),
        date: data
      },
      {
        title: 'Noticia ' + Math.random().toString(),
        date: data
      },
      {
        title: 'Noticia ' + Math.random().toString(),
        date: data
      },
      {
        title: 'Noticia ' + Math.random().toString(),
        date: data
      },
      {
        title: 'Noticia ' + Math.random().toString(),
        date: data
      },
      {
        title: 'Noticia ' + Math.random().toString(),
        date: data
      },
      {
        title: 'Noticia ' + Math.random().toString(),
        date: data
      },
      {
        title: 'Noticia ' + Math.random().toString(),
        date: data
      },
      {
        title: 'Noticia ' + Math.random().toString(),
        date: data
      },
      {
        title: 'Noticia ' + Math.random().toString(),
        date: data
      },
      {
        title: 'Noticia ' + Math.random().toString(),
        date: data
      },
      {
        title: 'Noticia ' + Math.random().toString(),
        date: data
      },
      {
        title: 'Noticia ' + Math.random().toString(),
        date: data
      },
      {
        title: 'Noticia ' + Math.random().toString(),
        date: data
      },
      {
        title: 'Noticia ' + Math.random().toString(),
        date: data
      },
      {
        title: 'Noticia ' + Math.random().toString(),
        date: data
      },
      {
        title: 'Noticia ' + Math.random().toString(),
        date: data
      }
    ])
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
                {item.title}
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