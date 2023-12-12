import { RouteObject } from 'react-router';

import { AppRoute } from '@enums';
import App from '../App';
import { Home, NotFound, Terms, Chat } from '@/pages';

export const routes: RouteObject[] = [
  {
    path: AppRoute.HOME,
    element: <App />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: AppRoute.TERMS,
        element: <Terms />,
      },
      {
        path: AppRoute.CHAT,
        element: <Chat />,
      },
      {
        path: AppRoute.ANY,
        element: <NotFound />,
      },
    ],
  },
];
