import React, { FC } from 'react';
import Login from './pages/Login.tsx';
import keycloakConfig from '../utils/keycloakConfig.ts';
import { ReactKeycloakProvider } from '@react-keycloak/web';

const App: FC = () => {

  return (
    <ReactKeycloakProvider authClient={keycloakConfig} initOptions={{
      onLoad: 'login-required',
    }}>
      <React.StrictMode>
        <Login />
      </React.StrictMode>
    </ReactKeycloakProvider>
  );
};

export default App;
