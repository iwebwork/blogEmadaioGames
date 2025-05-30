import { Col, Image, List, Row, Spin, Typography } from "antd";
import { SearchProps } from "antd/es/input/Search";
import React, { useState } from "react";
import { IPost } from "../../hooks/api/props";
import ListItemPostUi from "../layout/listItemPostUi";
import BarraPesquisaUi from "../layout/barraPesquisaUi";
import Pallet from "../layout/colorsPalette";
import { IListPostsUi, PaginationAlign, PaginationPosition } from './props';

const { Text } = Typography;
const timerMS = 2000;

const ListPostsUi: React.FC<IListPostsUi> = ({ posts, tipo, }) => {
  const [position] = useState<PaginationPosition>('bottom');
  const [align] = useState<PaginationAlign>('center');
  const [listPosts, setListPosts] = useState<IPost[]>([]);
  const [loading, setIsLoading] = useState(true);

  const onSearchInput: SearchProps['onSearch'] = (value, _e, info) => {
    setIsLoading(true);

    if (!value) {
      setListPosts(posts);
      return;
    }

    const data = [...posts].filter((elemento, indice, arrayOriginal) => {
      const position = elemento.name.toUpperCase().indexOf(value.toUpperCase());
      if (!elemento.corpo.toUpperCase().includes(value.toUpperCase(), position))
        return;

      return elemento;
    });

    setListPosts(data);
    setIsLoading(false);
  }

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

  return (
    <>
      <Row justify={'center'} style={{
        marginBottom: 20,
        marginRight: 40
      }}>
        <List
          header={
            <BarraPesquisaUi searchInput={onSearchInput} />
          }
          pagination={{
            position, align
          }}
          dataSource={listPosts}
          renderItem={(item: IPost) => {
            var backImagem = Pallet.BackGround.principal;

            var image = `/logo.png`;
            if (item.image) {
              image = `${process.env.REACT_APP_URL_API}/api/posts/getImagem/${item.id}`;
              backImagem = Pallet.BackGround.secundaria;
            }

            var title = item.title;
            var name = item.name;

            if (item.liberado === 2) {
              title += ' => pendente'
            }

            return (<List.Item>
              <Row >
                <Image preview={false} src={image} style={{
                  padding: 5,
                  maxWidth: 150,
                  marginRight: 10,
                  backgroundColor: backImagem
                }} />
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
    </>
  )
}

export default ListPostsUi;