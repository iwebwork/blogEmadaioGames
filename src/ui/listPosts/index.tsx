import { Col, Image, List, Row, Spin, Typography } from "antd";
import React, { useState } from "react";
import { get } from "../../hooks/api";
import { IPost } from "../../hooks/api/props";
import ListItemPostUi from "../../ui/layout/listPosts";
import Pallet from "../layout/colorsPalette";
import { IListPostsUi, PaginationAlign, PaginationPosition } from './props';

const { Text } = Typography;

const ListPostsUi: React.FC<IListPostsUi> = ({ tipo }) => {
  const [position] = useState<PaginationPosition>('bottom');
  const [align] = useState<PaginationAlign>('center');
  const [posts, setPosts] = useState<IPost[]>();

  const fetchPosts = async () => {
    const result = await get(`/data/${tipo}.json`);

    if (!result)
      return;

    setPosts(result);
  }

  React.useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
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
                  <ListItemPostUi id={item.id} tipo={tipo} title={title} date={item.date} />
                </Col>
              </Row>
            </List.Item>)
          }}
          locale={{ emptyText: <Text>Não possui posts</Text> }}
          loading={{ indicator: <Spin fullscreen />, spinning: !posts }}
        />
      </Row>
    </>
  )
}

export default ListPostsUi;