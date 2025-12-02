import { Button, Row } from "antd";
import React, { useEffect, useState } from "react";
import BarraPesquisaUi from "../layout/barraPesquisaUi";
import { useSearchParams } from "react-router-dom";
import { IPost } from "../../hooks/api/props";
import hooksApi from "../../hooks/api";
import { SearchProps } from "antd/es/input/Search";
import Pallet from "../layout/colorsPalette";
import { delay } from "../../hooks/comuns";
import ItemUi from "../itemPost";

const BodyViewUi: React.FC = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [take, setTake] = useState(4);

  const [listOriginalPosts, setListOriginalPosts] = useState<IPost[]>([]);
  const [listPosts, setListPosts] = useState<IPost[]>([]);
  const [searchParams] = useSearchParams();
  const { post } = hooksApi();

  const onSearchInput: SearchProps['onSearch'] = (value, _e, info) => {
    setInitLoading(true);
    setLoading(true);

    setListPosts(listOriginalPosts);

    if (!value) {
      return;
    }

    const data = [...listOriginalPosts].filter((elemento, indice, arrayOriginal) => {
      const position = elemento.name.toUpperCase().indexOf(value.toUpperCase());
      if (!elemento.corpo.toUpperCase().includes(value.toUpperCase(), position))
        return;

      return elemento;
    });

    setListPosts(data);
  }

  const buscaPosts = async () => {
    const request = {
      tipoPostId: searchParams.get('tipoPostId'),
      takeResponse: take,
      skipResponse: page
    };

    const result = (await post({ url: `/api/posts/getPageList`, body: request }));
    setListOriginalPosts(result.data);
  }

  useEffect(() => {
    buscaPosts();
    return;
  }, []);

  useEffect(() => {
    if (listOriginalPosts.length === 0) {
      setListPosts([]);
    }
    else {
      setListPosts(listOriginalPosts);
    }

    return;
  }, [listOriginalPosts]);

  useEffect(() => {
    if (listPosts.length === 0)
      return;

    delay(2000).finally(() => {
      setInitLoading(false);
      setLoading(false);
    });

    return;
  }, [listPosts])

  const onLoadMore = () => {
    // setListPosts(data.concat(Array.from({ length: PAGE_SIZE }).map(() => ({ loading: true }))));
    const nextPage = page + 1;
    setPage(nextPage);
    // fetchData(nextPage)
    //   .then((res) => {
    //     const results = Array.isArray(res) ? res : [];
    //     // const newData = data.concat(results);
    //     // setData(newData);
    //     // setList(newData);
    //     // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
    //     // In real scene, you can using public method of react-virtualized:
    //     // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
    //     window.dispatchEvent(new Event('resize'));
    //   });
  };

  const loadMore =
    !initLoading && !loading ? (
      <Row
        justify={"center"}
        style={{
          marginTop: 20,
          marginBottom: 40
        }}
      >
        <Button key={Math.random()} size="large" onClick={onLoadMore} variant="solid"
          style={{
            backgroundColor: Pallet.BackGround.principal,
            color: Pallet.Typography.principal
          }}
        >Veja Mais</Button>
      </Row>
    ) : null;

  return (<div
    style={{
      marginRight: 20
    }}
  >
    <BarraPesquisaUi searchInput={onSearchInput} />
    <Row >
      <div key={Math.random()} id="container-bd346bb6aa3254da62090d59214f97e8"></div>
    </Row>
    {listPosts.map((value) => {
      return (
        <ItemUi key={Math.random()} item={value} />
      )
    })}
    {loadMore}
  </div>)
}

export default BodyViewUi