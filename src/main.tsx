import React from 'react';
import ReactDOM from 'react-dom/client';

import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloakConfig from '../utils/keycloakConfig.ts';

import App from './App.tsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
