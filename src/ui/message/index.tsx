import { message } from 'antd';
import React from 'react';
import { useMessage } from '../../contexts/messages/messages';

const MessageComponent: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const messageContext = useMessage();

  React.useEffect(() => {
    if (messageContext.isEmpty)
      return;

    messageContext.messages.map((item) => {
      const typeMessage = item.tipo === 1 ? 'success' : 'error';

      messageApi.open({
        type: typeMessage,
        content: item.message
      });

      setTimeout(() => { }, 4000);

    });

    messageContext.clearMessages();
  }, [messageContext.isEmpty]);

  return (
    <>
      {contextHolder}
    </>
  );
};

export default MessageComponent;