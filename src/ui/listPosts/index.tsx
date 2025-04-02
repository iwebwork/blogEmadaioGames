import { Col, Image, List, Row, Spin, Typography } from "antd";
import React, { useState } from "react";
import { IPost } from "../../hooks/api/props";
import ListItemPostUi from "../../ui/layout/listPosts";
import Pallet from "../layout/colorsPalette";
import { IListPostsUi, PaginationAlign, PaginationPosition } from './props';

const { Text } = Typography;

const ListPostsUi: React.FC<IListPostsUi> = ({ posts, tipo, }) => {
  const [position] = useState<PaginationPosition>('bottom');
  const [align] = useState<PaginationAlign>('center');

  return (
    <>{posts &&
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

            // if (item.image !== "") {
            //   image = `/assets/img/${item.image}`;
            // } // descomentar quando resolver o upload da imagem

            var title = item.title;
            var name = item.name;

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
                  <ListItemPostUi id={item.id} tipo={tipo} name={name} title={title} date={item.date} />
                </Col>
              </Row>
            </List.Item>)
          }}
          locale={{ emptyText: <Text>Não possui posts</Text> }}
          loading={{ indicator: <Spin fullscreen />, spinning: posts.length === 0 }}
        />
      </Row>}
    </>
  )
}

export default ListPostsUi;