import { RouteObject } from 'react-router';

import { Route } from '@enums';
import App from '../App';
import { Home, NotFound, Terms, Chat } from '@/pages';

export const routes: RouteObject[] = [
  {
    path: Route.HOME,
    element: <App />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: Route.TERMS,
        element: <Terms />,
      },
      {
        path: Route.CHAT,
        element: <Chat />,
      },
      {
        path: Route.ANY,
        element: <NotFound />,
      },
    ],
  },
];
