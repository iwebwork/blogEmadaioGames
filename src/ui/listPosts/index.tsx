import { SearchOutlined } from "@ant-design/icons/lib/icons";
import { Button, Col, Divider, Image, List, Row, Spin, Typography } from "antd";
import Search, { SearchProps } from "antd/es/input/Search";
import React, { useState } from "react";
import { IPost } from "../../hooks/api/props";
import ListItemPostUi from "../../ui/layout/listPosts";
import Anuncio from "../anuncio";
import Pallet from "../layout/colorsPalette";
import { IListPostsUi, PaginationAlign, PaginationPosition } from './props';

const { Text } = Typography;
const timerMS = 2000;

const ListPostsUi: React.FC<IListPostsUi> = ({ posts, tipo, }) => {
  const [position] = useState<PaginationPosition>('bottom');
  const [align] = useState<PaginationAlign>('center');
  const [listPosts, setListPosts] = useState<IPost[]>([]);
  const [loading, setIsLoading] = useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setListPosts(posts);
    }, timerMS);
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, timerMS)
  }, [listPosts])

  const onSearchInput: SearchProps['onSearch'] = (value, _e, info) => {
    setIsLoading(true);

    if (!value) {
      setListPosts(posts);
      return;
    }

    const data = [...posts].filter((elemento, indice, arrayOriginal) => {
      if (!elemento.name.toLocaleUpperCase().includes(value.toLocaleUpperCase()))
        return;

      return elemento;
    });

    setListPosts(data);
    setIsLoading(false);
  }

  return (
    <Anuncio>
      {/* {posts && */}
      <Row
        justify={"end"}
        style={{
          marginTop: 40,
          marginRight: 40
        }}
      >
        <Col
          span={8}

        >
          <Search
            placeholder="Digite para pesquisar"
            onSearch={onSearchInput}
            enterButton={
              <Button
                style={{
                  backgroundColor: Pallet.BackGround.principal,
                  color: Pallet.Typography.principal
                }}
                icon={
                  <SearchOutlined />
                }
              />
            }
          />
        </Col>
      </Row>
      <Row justify={'end'} style={{
        marginBottom: 20,
        marginRight: 40
      }}>
        <List
          pagination={{
            position, align
          }}
          dataSource={listPosts}
          renderItem={(item: IPost) => {
            var image = `/assets/img/erro.png`;
            if (item.image !== "") {
              image = `${process.env.REACT_APP_URL_API}/api/posts/getImagem/${item.id}`;
            }

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
                  <Image preview={false} src={image} style={{
                    padding: 20,
                    maxWidth: 150
                  }} />
                </Col>
                <Col>
                  <ListItemPostUi id={item.id} tipo={tipo} name={name} title={title} date={item.date} />
                </Col>
              </Row>
            </List.Item>)
          }}
          locale={{ emptyText: <Text>Nenhum Post encontrado</Text> }}
          loading={{ indicator: <Spin fullscreen />, spinning: loading }}
        />
      </Row>
      {/* } */}
    </Anuncio>
  )
}

export default ListPostsUi;