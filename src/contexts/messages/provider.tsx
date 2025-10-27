import React, { PropsWithChildren, useState } from "react";
import { IMessage } from "./props";
import MessageContext from ".";

export const MessageProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  const onSetMessages = (value: IMessage[]) => {
    setIsEmpty(false);
    setMessages(value);
  }

  const onClearMessages = () => {
    setIsEmpty(true);
    setMessages([]);
  }

  return (
    <MessageContext.Provider value={{
      messages: messages,
      isEmpty: isEmpty,
      setMessages: onSetMessages,
      clearMessages: onClearMessages
    }}>
      {children}
    </MessageContext.Provider>
  )
}