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
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import type { User } from '@/types/User';
import type { JwtPayload } from '@/types/Jwt';
import { Route } from '@enums';

export interface UserContextProps {
  user: User;
  setUser: Dispatch<SetStateAction<User | null>>;
  logIn: (token: string) => void;
  logOut: () => void;
}

export const UserContext = createContext<UserContextProps>(null!);

export const UserContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);

  const logIn = useCallback((token: string) => {
    localStorage.setItem('accessToken', token);
    const decodedUser: JwtPayload = jwtDecode<JwtPayload>(token);
    setUser(decodedUser.user);
  }, []);

  const logOut = useCallback(() => {
    localStorage.removeItem('accessToken');
    setUser(null);
    navigate(Route.LOGIN);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    if (!token) {
      return;
    }

    const decodedUser: JwtPayload = jwtDecode<JwtPayload>(token) ?? null;
    const expiresDate: Date = new Date(decodedUser.exp * 1000);
    const now: Date = new Date();

    if (now > expiresDate) {
      toast('Sesiunea a expirat', { type: 'warning' });
      return logOut();
    }

    setUser(decodedUser.user);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
