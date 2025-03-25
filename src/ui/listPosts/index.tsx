import React, { useState } from "react";
import { IPost } from "../../hooks/api/props";
import { Col, List, Row, Image } from "antd";
import ListPostUi from "../../ui/layout/listPosts";
import { post } from "../../hooks/api";
import { IListPostsUi, PaginationAlign, PaginationPosition } from './props';
import Pallet from "../layout/colorsPalette";
import { formatarDataPorExtenso } from '../../hooks/comuns';

const ListPostsUi: React.FC<IListPostsUi> = ({ tipo }) => {
  const [posts, setPosts] = useState<IPost[]>();
  const [position] = useState<PaginationPosition>('bottom');
  const [align] = useState<PaginationAlign>('center');

  const fetchPosts = async () => {
    const result = (await post({ url: '/api/posts/getTable', body: {} })).data;

    if (!result)
      return;

    setPosts(result)
  }

  React.useEffect(() => {
    fetchPosts();
  }, [])

  return (
    <Row justify={'center'} style={{
      marginBottom: 20
    }}>
      <List
        pagination={{
          position, align
        }}
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
            <Row >
              <Col style={{
                backgroundColor: Pallet.BackGround.principal,
                marginRight: 10
              }}>
                <Image preview={false} width={100} src={image} style={{
                  padding: 20
                }} />
              </Col>
              <Col>
                <ListPostUi id={item.id} tipo={tipo} title={title} date={formatarDataPorExtenso(item.date)} />
              </Col>
            </Row>
          </List.Item>)
        }}
      />
    </Row>
  )
}

export default ListPostsUi;