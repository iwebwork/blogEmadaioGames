import { Col, Image, List, Row } from 'antd';
import React, { useState } from 'react';
import { getNoticias } from '../../hooks/api';
import { IPost } from '../../hooks/api/props';
import ListPostUi from '../../ui/layout/listPosts';

type PaginationPosition = 'top' | 'bottom' | 'both';

type PaginationAlign = 'start' | 'center' | 'end';

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
                <ListPostUi id={item.id} title={title} date={item.date} />
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