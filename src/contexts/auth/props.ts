import { IResponse } from '../../hooks/api/props';
import { IMessage } from '../messages/props';

export interface ILoginRequestViewModel {
  Email: string,
  Password: string
}

export interface ILoginResponseViewModel {
  token: string;
  estabelecimento: any;
  usuario: any;
}

export interface IUser<T> {
  user: T;
}
export interface IUsuario {
  nome: string;
  accessToken: string;
  isAutenticate: boolean;
}

export interface IAuthContext {
  usuario: IUser<IUsuario>;
  token?: string;
  isLogado: boolean;
  setLogado: (value: boolean) => any;
  login(requestViewModel: ILoginRequestViewModel): Promise<IResponse>;
 }