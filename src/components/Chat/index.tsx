import { FC } from 'react';
import { useParams } from 'react-router';

const Chat: FC = () => {
  const id: string = useParams()['chatId']!;

  return <div className="">Chat {id}</div>;
};

export default Chat;
