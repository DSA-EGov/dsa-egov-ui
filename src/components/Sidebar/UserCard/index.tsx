import { FC, memo } from 'react';

import { useAuth } from '@hooks';
import * as icons from '@icons';

const UserCard: FC = () => {
  const auth = useAuth();

  return (
    <div className="justify-center items-center flex px-6 py-3">
      <div className="rounded-lg bg-black/10 flex-1 flex justify-between items-center px-5 py-3">
        <span>{auth.name ?? auth.username}</span>
        <button onClick={() => auth.logout()} className="default hover:bg-white/10 p-2 rounded-full aspect-square">
          <icons.Logout width={18} height={18} />
        </button>
      </div>
    </div>
  );
};

export default memo(UserCard);
