import { FC, memo, useCallback } from 'react';

import * as icons from '@icons';
import { useAuth } from '@hooks'

const CreateChatButton: FC = () => {
  const auth = useAuth()

  const handleCreateChat = useCallback(() => {}, []);

  return (
    <div className="px-6">
      <button className="flex items-center w-full py-6 hover:bg-white/10 rounded-lg px-5 gap-2 my-3">
        <span>Create new</span>
        <icons.Plus width={18} height={18} />
      </button>
    </div>
  );
};

export default memo(CreateChatButton);
