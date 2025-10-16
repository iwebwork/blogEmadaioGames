import { Col, Image, List, Row, Spin, Typography } from "antd";
import { SearchProps } from "antd/es/input/Search";
import React, { useState } from "react";
import { IPost } from "../../hooks/api/props";
import ItemPostUi from "../itemPost";
import BarraPesquisaUi from "../layout/barraPesquisaUi";
import Pallet from "../layout/colorsPalette";
import { IListPostsUi, PaginationAlign, PaginationPosition } from './props';
import { useSearchParams } from "react-router";
import hooksApi from "../../hooks/api";

const { Text } = Typography;

const ListPostsUi: React.FC<IListPostsUi> = () => {
  const [position] = useState<PaginationPosition>('bottom');
  const [align] = useState<PaginationAlign>('center');
  const [listOriginalPosts, setListOriginalPosts] = useState<IPost[]>([]);
  const [listPosts, setListPosts] = useState<IPost[]>([]);
  const [loading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const { post } = hooksApi()

  const onSearchInput: SearchProps['onSearch'] = (value, _e, info) => {
    setIsLoading(true);
    setListPosts(listOriginalPosts);

    if (!value) {
      setIsLoading(false);
      return;
    }

    const data = [...listOriginalPosts].filter((elemento, indice, arrayOriginal) => {
      const position = elemento.name.toUpperCase().indexOf(value.toUpperCase());
      if (!elemento.corpo.toUpperCase().includes(value.toUpperCase(), position))
        return;

      return elemento;
    });

    setListPosts(data);
    setIsLoading(false);
  }

  const buscaPosts = async () => {
    setIsLoading(true);
    const request = { tipoPostId: searchParams.get('tipoPostId') };

    const result = (await post({ url: `/api/posts/getTable`, body: request }));
    setListOriginalPosts(result.data);
    setIsLoading(false);
  }

  React.useEffect(() => {

    if (listOriginalPosts.length > 0)
      return;

    buscaPosts();
  }, []);

  React.useEffect(() => {
    setIsLoading(true);

    if (listOriginalPosts.length == 0) {
      setListPosts([]);
    }
    else {
      setListPosts(listOriginalPosts);
    }

    setIsLoading(false);
  }, [listOriginalPosts])

  return (
    <>
      <Row justify={'center'} style={{
        marginBottom: 20,
        marginRight: 40
      }}>
        <List
          header={
            <>
              <BarraPesquisaUi searchInput={onSearchInput} />
              <Row >
                <div id="container-bd346bb6aa3254da62090d59214f97e8"></div>
              </Row>
            </>
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
                  <ItemPostUi id={item.id} name={name} title={title} date={item.date} />
                </Col>
              </Row>
            </List.Item>)
          }}
          locale={{ emptyText: <Text>Nenhum Post encontrado</Text> }}
          loading={{ indicator: <Spin fullscreen />, spinning: loading }}
        />
      </Row>
    </>
  )
}

export default ListPostsUi;