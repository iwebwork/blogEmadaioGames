import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router";
import LayoutViewUi from "../ui/layout";
import PostUi from "../ui/layout/post";
import PostNaoEncontrado from "../ui/layout/postNaoEncontrado/index";
import ListPostsUi from "../ui/listPosts";

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
  return (
    <LayoutViewUi
    // SiderChildrenRight={<Sider />}
    // SiderChildrenLeft={<Sider />}
    >
      <Routes>
        <Route index path='/noticias' element={<ListPostsUi tipo='noticias' />} />
        <Route path='/reviews' element={<ListPostsUi tipo='reviews' />} />
        <Route path='/quemSomos' element={<QuemSomosView />} />
        <Route path='/naoEncontrado' element={<PostNaoEncontrado />} />
        <Route path='/post/:tipo/:id' element={<PostUi />} />
        <Route path='*' element={<Navigate to={'/noticias'} />} />
      </Routes>
    </LayoutViewUi>
  )
}

export default SiteView;