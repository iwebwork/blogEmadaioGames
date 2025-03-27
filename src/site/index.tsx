import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router";
import LayoutViewUi from "../ui/layout";
import PostUi from "../ui/layout/post";
import SuspenseUi from "../ui/layout/suspense";

const NoticiasView = lazy(() => import(`./noticias`));
const ReviewsView = lazy(() => import(`./reviews`));
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
      <SuspenseUi>
        <Routes>
          <Route index path='/noticias' element={<NoticiasView />} />
          <Route path='/reviews' element={<ReviewsView />} />
          <Route path='/quemSomos' element={<QuemSomosView />} />
          <Route path='/post/:tipo/:id' element={<PostUi />} />
          <Route path='*' element={<Navigate to={'/noticias'} />} />
        </Routes>
      </SuspenseUi>
    </LayoutViewUi>
  )
}

export default SiteView;