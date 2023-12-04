import { FC, memo } from 'react';
import { useParams } from 'react-router';

import ListItem from './ListItem';
import type { ChatSelectListProps } from './types';

const ChatSelectList: FC<ChatSelectListProps> = ({
  sessionsList,
  onDelete,
  onRename,
}) => {
  const params = useParams();
  const sessionId: string | undefined = params['chatId'];

  return (
    <div className="flex flex-col overflow-auto flex-1 pr-6">
      <ul className="flex flex-col gap-2 px-6 py-1.5 overflow-auto">
        {sessionsList.map((session) => (
          <ListItem
            onRename={onRename}
            key={session.id}
            chat={session}
            onDelete={onDelete}
            isSelected={session.id === sessionId}
          />
        ))}
      </ul>
    </div>
  );
};

export default memo(ChatSelectList);
