import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { keycloakConfig } from '@constants/keycloakConfig';

import './index.scss';
import { routes } from '@constants/routes';

const rootElement: HTMLElement = document.getElementById('root')!;
const router = createBrowserRouter(routes);

createRoot(rootElement).render(
  <ReactKeycloakProvider
    authClient={keycloakConfig}
    initOptions={{
      onLoad: 'login-required',
    }}
  >
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </ReactKeycloakProvider>,
);
