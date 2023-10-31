import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

import { mapRouteParams } from '@/helpers/mapRouteParams';
import { Route } from '@enums';
import { cn } from '@/helpers/cn';

import { availableChats } from './__mock__/availableChats';

const ChatSelectList: FC = () => {
  const params = useParams();
  const chatId: string | undefined = params['chatId'];

  return (
    <div className="flex flex-col overflow-auto flex-1 pr-6">
      <ul className="flex flex-col gap-2 px-6 py-1.5 overflow-auto">
        {availableChats.map((chat) => (
          <li key={chat.id} className="flex">
            <Link
              to={mapRouteParams(Route.CHAT, { chatId: chat.id })}
              className={cn(
                'default text-ellipsis text-lg hover:bg-white/10 duration/150 py-6 px-5 rounded-lg flex-1',
                { 'bg-white/10': chatId === chat.id },
              )}
            >
              {chat.name ?? 'Unnamed'}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(ChatSelectList);
