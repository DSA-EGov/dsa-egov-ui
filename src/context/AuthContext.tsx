import {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useMemo,
} from 'react';
import { useKeycloak } from '@react-keycloak/web';
import Keycloak from 'keycloak-js';

interface AuthContextProps {
  readonly isAuthenticated: boolean;
  readonly username?: string;
  readonly email?: string;
  readonly isEmailVerified?: boolean;
  readonly name?: string;
  readonly familyName?: string;
  readonly givenName?: string;
  readonly issuedAt?: Date;
  readonly expiresAt?: Date;
  readonly userId?: string;
  readonly token?: string;
  logout: Keycloak['logout'];
}

export const AuthContext = createContext<AuthContextProps>(null!);

export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { keycloak } = useKeycloak();

  // useMemo does not work
  const providerValue: AuthContextProps = {
    isAuthenticated: keycloak.authenticated,
    username: keycloak.tokenParsed?.preferred_username,
    email: keycloak.tokenParsed?.email,
    isEmailVerified: keycloak.tokenParsed?.email_verified,
    name: keycloak.tokenParsed?.name,
    familyName: keycloak.tokenParsed?.family_name,
    givenName: keycloak.tokenParsed?.given_name,
    issuedAt: new Date(keycloak.tokenParsed?.iat),
    expiresAt: new Date(keycloak.tokenParsed?.exp),
    userId: keycloak.tokenParsed?.sub,
    token: keycloak.token,
    logout: keycloak.logout,
  };

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};
