import { FC, PropsWithChildren } from 'react';

const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const token = localStorage.getItem('access_token');

  return children

  // return token ? children : <Navigate to={Route.LOGIN} />;
};

export default PrivateRoute;
