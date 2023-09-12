import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useState,
} from 'react';

import type { User } from '@/types/User';
import { userMock } from '@/mocks/user.mock';

export interface UserContextProps {
  user: User;
  setUser: Dispatch<SetStateAction<User | null>>;
}

export const UserContext = createContext<UserContextProps>(null!);

export const UserContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(userMock);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
