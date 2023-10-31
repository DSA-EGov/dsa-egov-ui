import { FC, memo } from 'react';

import * as icons from '@icons';

const LoadingScreen: FC = () => {
  return (
    <div className="flex items-center justify-center absolute h-screen w-screen bg-black/50">
      <icons.Spinner width={56} height={56} className="animate-spin" />
    </div>
  );
};

export default memo(LoadingScreen);
