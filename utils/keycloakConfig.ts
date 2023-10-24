import Keycloak from 'keycloak-js';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
let keycloakInstance: Keycloak = window.keycloakInstance;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
if (!window.keycloakInstance) {
    keycloakInstance = new Keycloak({
        url: 'http://localhost:8080/auth',
        realm: 'egov',
        clientId: 'egov-app'
    });

    console.log(keycloakInstance)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.keycloakInstance = keycloakInstance;
}

export default keycloakInstance;