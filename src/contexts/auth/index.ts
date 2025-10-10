import { createContext } from 'react';
import { IAuthContext } from './props';

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export default AuthContext;