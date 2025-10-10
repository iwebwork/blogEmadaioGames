import { createContext } from 'react';
import { IMessageContext } from './props';

const MessageContext = createContext<IMessageContext>({} as IMessageContext);

export default MessageContext;