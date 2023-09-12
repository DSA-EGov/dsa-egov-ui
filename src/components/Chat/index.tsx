import { FC } from 'react';
import { useParams } from 'react-router';

// mb use loader?
// https://reactrouter.com/en/main/route/route#loader
const Chat: FC = () => {
  const id = useParams()['id']!;

  return <div className="">Chat {id}</div>;
};

export default Chat;
