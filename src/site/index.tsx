import { lazy, useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import LayoutViewUi from "../ui/layout";
import PostUi from "../ui/layout/post";
import SuspenseUi from "../ui/layout/suspense";
import ListPostsUi from "../ui/listPosts";
import { TypePosts } from "../ui/listPosts/props";
import { IPost } from "../hooks/api/props";
import { get } from "../hooks/api";
import React from "react";

const QuemSomosView = lazy(() => import(`./quemSomos`));

// const Sider: React.FC = () => {
//   return (
//     <Flex justify={'center'}>
//       <Col span={18}>
//         < div id="container-03e4cb914ac639fadad951bcf7c1b7f2" />
//       </Col>
//     </Flex >
//   )
// }

const SiteView: React.FC = () => {
  const [listPostsNoticias, setPostsNoticias] = useState<IPost[]>();
  const [listPostsReviews, setPostsReviews] = useState<IPost[]>();
  const [carregou, setCarregou] = useState(false);

  const fetchPosts = async (tipo: TypePosts) => {
    const result = await get(`/data/${tipo}.json`);

    if (!result)
      return [];

    return result;
  }

  const buscarNoticias = async () =>
    setPostsNoticias(await fetchPosts('noticias'));


  const buscarReviews = async () =>
    setPostsReviews(await fetchPosts('reviews'));

  React.useEffect(() => {
    if (carregou)
      return;

    buscarNoticias();
    buscarReviews();
  }, []);


  return (
    <LayoutViewUi
    // SiderChildrenRight={<Sider />}
    // SiderChildrenLeft={<Sider />}
    >
      <Routes>
        <Route index path='/noticias' element={<ListPostsUi posts={listPostsNoticias || []} tipo='noticias' />} />
        <Route path='/reviews' element={<ListPostsUi posts={listPostsReviews || []} tipo='reviews' />} />
        <Route path='/quemSomos' element={<QuemSomosView />} />
        <Route path='/post/:tipo/:id' element={<PostUi />} />
        <Route path='*' element={<Navigate to={'/noticias'} />} />
      </Routes>
    </LayoutViewUi>
  )
}

export default SiteView;