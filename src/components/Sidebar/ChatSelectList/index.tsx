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
  const sessionId: string | undefined = params['sessionId'];

  return (
    <div className="flex flex-col overflow-auto mr-3 flex-1 pl-6 pr-3">
      <ul className="flex flex-col gap-2 py-1.5">
        {sessionsList.map((session) => (
          <ListItem
            onRename={onRename}
            key={session.id}
            session={session}
            onDelete={onDelete}
            isSelected={session.id === sessionId}
          />
        ))}
      </ul>
    </div>
  );
};

export default memo(ChatSelectList);
