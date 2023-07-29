const client_id = import.meta.env.VITE_CLIENT_ID;
const scope = import.meta.env.VITE_YOUTUBE_SCOPE;

class GoogleAuth {
    // taken from https://developers.google.com/identity/oauth2/web/guides/migration-to-gis#authorization_code_flow_examples
    authCode = '';

    constructor() {
        google.accounts.id.initialize({
            client_id: client_id,
        });
    }

    runWithAuth(func: Function): void {
        let client = google.accounts.oauth2.initCodeClient({
            client_id: client_id,
            scope: scope,
            ux_mode: "popup",
            callback: (response) => {
                func(response.code);
            }
        })
        
        client.requestCode();
    }
}

export default GoogleAuth;