import { FC } from 'react';
import { useParams } from 'react-router';

import { ChatInput, ChatMessages } from '@components';

const Chat: FC = () => {
  const chatId: string = useParams()['chatId']!;

  return (
    <div className="flex-1 flex flex-col">
      <ChatMessages />
      <ChatInput />
    </div>
  );
};

export default Chat;
