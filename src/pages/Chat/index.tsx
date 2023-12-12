import { FC } from 'react';

import { ChatInput, ChatMessages } from '@components';
import { ChatContextProvider } from '@/context/chat';

const Chat: FC = () => {
  return (
    <ChatContextProvider>
      <div className="flex-1 flex flex-col overflow-auto">
        <ChatMessages />
        <ChatInput />
      </div>
    </ChatContextProvider>
  );
};

export default Chat;
