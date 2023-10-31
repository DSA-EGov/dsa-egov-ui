import { FC, memo, useState } from 'react';
import { useParams } from 'react-router';

import { availableChats } from './__mock__/availableChats';
import ListItem from './ListItem';

const ChatSelectList: FC = () => {
  const params = useParams();
  const chatId: string | undefined = params['chatId'];
  return (
    <div className="flex flex-col overflow-auto flex-1 pr-6">
      <ul className="flex flex-col gap-2 px-6 py-1.5 overflow-auto">
        {availableChats.map((chat) => (
          <ListItem key={chat.id} chat={chat} isSelected={chat.id === chatId} />
        ))}
      </ul>
    </div>
  );
};

export default memo(ChatSelectList);
