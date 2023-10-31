import { useCallback, FC, memo } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '@hooks';
import { Route } from '@enums';

const Auth: FC = () => {
  const auth = useAuth();

  const handleLogin = useCallback(() => {
    auth.login();
  }, [auth]);

  return auth.isAuthenticated ? (
    <Navigate to={Route.HOME} />
  ) : (
    <div>
      <p>Please login to continue.</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default memo(Auth);
