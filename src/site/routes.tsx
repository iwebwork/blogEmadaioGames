import { BrowserRouter, Navigate, Route, Routes } from "react-router"
import SiteView from ".";
import TokenService from "../contexts/auth/token";
import { useAuth } from "../contexts/auth/auth";

const SiteRoutes: React.FC = () => {

  return (
    <Routes>
      <Route index path='*' element={<SiteView />} />
    </Routes>
  )
}

export default SiteRoutes;