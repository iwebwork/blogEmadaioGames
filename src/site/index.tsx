import React, { lazy, useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import { post } from "../hooks/api";
import { IPost } from "../hooks/api/props";
import LayoutViewUi from "../ui/layout";
import PostUi from "../ui/layout/post";
import ListPostsUi from "../ui/listPosts";
import { TypePosts } from "../ui/listPosts/props";

const QuemSomosView = lazy(() => import(`./quemSomos`));
const NaoEncontradoView = lazy(() => import(`./../ui/layout/naoEncontrado`));


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
  const [posts, setPosts] = useState<IPost[]>([]);
  // const [noticias, setNoticias] = useState<IPost[]>([]);
  // const [reviews, setReviews] = useState<IPost[]>([]);

  const fetchPosts = async () => {
    const result: IPost[] = (await post({ url: `/api/posts/getTable`, body: {} })).data;

    if (!result)
      return;

    setPosts(result);
  }

  React.useEffect(() => {
    fetchPosts();
  }, []);

  interface ISiteViewView {
    tipo: TypePosts;
  }

  const PostsView: React.FC<ISiteViewView> = ({ tipo }) => {
    const result = posts.filter(s => s.tipoNome === tipo);

    if (result.length > 0)
      return <ListPostsUi posts={result} tipo={tipo} />
    else
      return <NaoEncontradoView />
  }

  return (
    <LayoutViewUi
    // SiderChildrenRight={<Sider />}
    // SiderChildrenLeft={<Sider />}
    >
      <Routes>
        <Route index path='/noticias' element={<PostsView tipo="noticias" />} />
        <Route path='/reviews' element={<PostsView tipo="reviews" />} />
        <Route path='/quemSomos' element={<QuemSomosView />} />
        <Route path='/post/:tipo/:id' element={<PostUi />} />
        <Route path='*' element={<Navigate to={'/noticias'} />} />
        <Route path='/naoEncontrado' element={<NaoEncontradoView />} />
      </Routes>
    </LayoutViewUi>
  )
}

export default SiteView;