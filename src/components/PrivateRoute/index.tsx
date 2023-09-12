import { FC } from 'react';

interface Props {
  Component: FC;
}

const PrivateRoute: FC<Props> = ({ Component }) => {
  const token = localStorage.getItem('access_token');

  return <Component />;

  // return token ? children : <Navigate to={Route.LOGIN} />;
};

export default PrivateRoute;
