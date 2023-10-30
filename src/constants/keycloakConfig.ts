import Keycloak from 'keycloak-js';

let keycloakInstance: Keycloak = window.keycloakInstance;

if (!window.keycloakInstance) {
  keycloakInstance = new Keycloak({
    url: import.meta.env.VITE_KEYCLOAK_URL,
    realm: import.meta.env.VITE_KEYCLOAK_REALM,
    clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
  });

  window.keycloakInstance = keycloakInstance;
}

export const keycloakConfig: Keycloak = keycloakInstance;
