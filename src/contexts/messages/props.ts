export interface IMessage {
  message: string;
  tipo: number;
  tipoNome: string;
}

export interface IMessageContext {
  messages: IMessage[];
  isEmpty: boolean;
  setMessages: (value: IMessage[]) => void;
  clearMessages: () => void;
}