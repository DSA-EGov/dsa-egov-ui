import { FC, memo } from 'react';

import { useAuth } from '@hooks';

import ChatSelectList from './ChatSelectList';
import UserCard from './UserCard';
import CreateChatButton from './CreateChatButton';

const Sidebar: FC = () => {
  const auth = useAuth();

  return (
    auth.isAuthenticated && (
      <div className="w-1/6 max-w-sm min-w-[256px] h-full flex flex-col overflow-auto flex-1">
        <CreateChatButton />
        <ChatSelectList />
        <UserCard />
      </div>
    )
  );
};

export default memo(Sidebar);
