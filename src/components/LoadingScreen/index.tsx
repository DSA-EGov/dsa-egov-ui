import { FC, memo } from 'react';

import { Spinner } from '@components';

const LoadingScreen: FC = () => {
  return (
    <div className="flex items-center justify-center absolute h-screen w-screen bg-black/50">
      <Spinner size={64} />
    </div>
  );
};

export default memo(LoadingScreen);
