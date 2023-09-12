import { FC } from 'react';
import { Outlet } from 'react-router';

const ChatPage: FC = () => {
  return (
    <div className="">
      Chat page
      <Outlet />
    </div>
  );
};

export default ChatPage;
