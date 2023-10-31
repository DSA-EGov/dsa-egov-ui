import type Keycloak from 'keycloak-js';
import { useKeycloak } from '@react-keycloak/web';

export interface AuthProps {
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
  login: Keycloak['login'];
}

export const useAuth = (): AuthProps => {
  const { keycloak } = useKeycloak();

  return {
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
    login: keycloak.login,
  };
};
