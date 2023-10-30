import { FC, memo, useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';

const Home: FC = () => {
  const { username } = useContext(AuthContext);

  return <h1>Hello, {username}</h1>;
};

export default memo(Home);
