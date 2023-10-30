import { useCallback, FC, memo } from 'react';
import { useKeycloak } from '@react-keycloak/web';

const Auth: FC = () => {
  const { keycloak } = useKeycloak();

  const handleLogin = useCallback(() => {
    keycloak?.login();
  }, [keycloak]);

  const handleLogout = useCallback(() => {
    keycloak?.logout();
  }, [keycloak]);

  return keycloak?.authenticated ? (
    <div>
      <p>Welcome, {keycloak?.tokenParsed?.preferred_username}!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  ) : (
    <div>
      <p>Please login to continue.</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default memo(Auth);
