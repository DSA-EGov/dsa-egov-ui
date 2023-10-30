import { RouteObject } from 'react-router';

import { Route } from '@enums';
import App from '../App';
import { Chat, ChatPage, TermsPage } from '@components';
import EmptyChat from '@components/EmptyChat';
import { Home } from '@/pages';

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
        element: <TermsPage />,
      },
      {
        path: Route.CHAT,
        element: <ChatPage />,
        children: [
          {
            index: true,
            element: <EmptyChat />,
          },
          {
            path: Route.SELECTED_CHAT,
            element: <Chat />,
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
