import React, { useCallback } from 'react';
import { useKeycloak } from '@react-keycloak/web';

const Login: React.FC = () => {
  const { keycloak } = useKeycloak();

  const handleLogin = useCallback(() => {
    keycloak?.login();
  }, [keycloak]);

  const handleLogout = useCallback(() => {
    keycloak?.logout();
  }, [keycloak]);

  if (keycloak?.authenticated) {
    return (
      <div>
        <p>Welcome, {keycloak?.tokenParsed?.preferred_username}!</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <p>Please login to continue.</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
