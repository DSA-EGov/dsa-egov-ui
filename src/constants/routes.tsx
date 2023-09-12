import { RouteObject } from 'react-router';

import { Route } from '@enums';
import App from '../App';
import { LoginPage, RegisterPage } from '@components';

export const routes: RouteObject[] = [
  {
    path: Route.HOME,
    element: <App />,
    children: [
      {
        path: Route.LOGIN,
        element: <LoginPage />,
      },
      {
        path: Route.REGISTER,
        element: <RegisterPage />,
      },
      {
        path: Route.ANY,
        element: <p>Not found</p>,
      },
    ],
  },
];
