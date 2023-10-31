import { FC, memo } from 'react';

const Home: FC = () => {
  return (
    <div className="flex items-center justify-center flex-1">
      <h1 className="text-7xl font-thin cursor-default">eGov.AI</h1>
    </div>
  );
};

export default memo(Home);
