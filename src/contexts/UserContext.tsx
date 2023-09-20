import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import jwtDecode from 'jwt-decode';

import type { User } from '@/types/User';
import type { JwtPayload } from '@/types/Jwt';

export interface UserContextProps {
  user: User;
  setUser: Dispatch<SetStateAction<User | null>>;
  logIn: (token: string) => void;
  logOut: () => void;
}

export const UserContext = createContext<UserContextProps>(null!);

export const UserContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const logIn = useCallback((token: string) => {
    localStorage.setItem('accessToken', token);
    const decodedUser: JwtPayload = jwtDecode<JwtPayload>(token);
    setUser(decodedUser.user);
  }, []);

  const logOut = useCallback(() => {
    localStorage.removeItem('accessToken');
    setUser(null);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    if (!token) {
      return;
    }

    // TODO: logout if exp > now
    const decodedUser: JwtPayload = jwtDecode<JwtPayload>(token) ?? null;
    setUser(decodedUser.user);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
