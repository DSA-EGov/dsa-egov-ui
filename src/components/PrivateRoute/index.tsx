import React, { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router';

import { Route } from '@enums';

interface Props {
  Component: FC;
}

const PrivateRoute: FC<Props> = ({ Component }) => {
  const token = localStorage.getItem('accessToken');

  return token ? <Component /> : <Navigate to={Route.LOGIN} />;
};

export default PrivateRoute;
