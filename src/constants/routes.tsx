import { RouteObject } from 'react-router';

import { Route } from '@enums';
import App from '../App';
import {
  Chat,
  ChatPage,
  LoginPage,
  RegisterPage,
  TermsPage,
} from '@components';
import PrivateRoute from '@components/PrivateRoute';
import EmptyChat from '@components/EmptyChat';

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
        path: Route.TERMS,
        element: <TermsPage />,
      },
      {
        path: Route.CHAT,
        element: <PrivateRoute Component={ChatPage} />,
        children: [
          {
            index: true,
            element: <PrivateRoute Component={EmptyChat} />,
          },
          {
            path: Route.SELECTED_CHAT,
            element: <PrivateRoute Component={Chat} />,
          },
        ],
      },

      {
        path: Route.ANY,
        element: <p>Not found</p>,
      },
    ],
  },
];
