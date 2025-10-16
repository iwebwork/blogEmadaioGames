import React, { PropsWithChildren, useState } from "react";
import AuthContext from ".";
import { ILoginRequestViewModel, IUser, IUsuario } from "./props";
import TokenService from "./token";
import { IMessage } from "../messages/props";
import hooksApi from "../../hooks/api";
import { IResponse } from "../../hooks/api/props";

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { post } = hooksApi();

  const [usuario, setUsuario] = useState<IUser<IUsuario>>(TokenService.getUser() as IUser<IUsuario>);

  const [logado, setLogado] = useState<boolean>(false);
  const [token, setToken] = useState<string>(TokenService.getLocalAccessToken());

  const Login = async (params: ILoginRequestViewModel): Promise<IResponse> => {
    const result = (await post({ url: `api/usuarios/login`, body: params }));
    if (result.isValid) {
      TokenService.setUser(result.data.usuario);
      setLogado(result.isAutenticate);
      setToken(result.data.usuario.token);
    }
    else {
      setLogado(false);
      TokenService.removeUser();
      console.log('AuthProvider login', 'erro ao realizar o login');
    }

    return result.data;
  }

  React.useEffect(() => {
    if (logado) {
      setUsuario(TokenService.getUser() as IUser<IUsuario>);
      window.location.href = '/';
    }
  }, [logado])

  return (
    <AuthContext.Provider value={{
      usuario: usuario,
      token: token,
      isLogado: logado,
      setLogado: setLogado,
      login: Login
    }}>
      {children}
    </AuthContext.Provider>
  );
};