import { Route, Routes } from "react-router";
import SiteView from ".";
import QuemSomosView from "./quemSomos";

const SiteRoutes: React.FC = () => {

  return (
    <Routes>
      <Route index path='*' element={<SiteView />} />
      <Route index path='/quemSomos' element={<QuemSomosView />} />
    </Routes>
  )
}

export default SiteRoutes;