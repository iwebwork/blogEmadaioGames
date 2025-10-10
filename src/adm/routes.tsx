import { BrowserRouter, Navigate, Route, Routes } from "react-router"
import CadastroPostView from "./cadastroPost"
import { useAuth } from "../contexts/auth/auth";
import TokenService from "../contexts/auth/token";
import LoginView from "./login";

const AdmRoutes: React.FC = () => {

  return (
    <Routes>
      <Route index path='/cadastroPost' element={<CadastroPostView />} />
      <Route path='/login' element={<LoginView />} />
    </Routes>
  )
}

export default AdmRoutes;