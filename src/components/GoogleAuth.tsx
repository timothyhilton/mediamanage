import { useEffect, useState } from "react";

const client_id = import.meta.env.VITE_CLIENT_ID;
const scope = import.meta.env.VITE_YOUTUBESCOPE;
const apiUrl = import.meta.env.VITE_API_URL;

function GoogleAuth(props: any) {
    const [client, setClient] = useState({});

    // taken from https://developers.google.com/identity/oauth2/web/guides/migration-to-gis#authorization_code_flow_examples

    useEffect(() => {
        google.accounts.id.initialize({
            client_id: client_id,
        });

        setClient(
            google.accounts.oauth2.initCodeClient({
                client_id: client_id,
                scope: scope,
                ux_mode: "popup",
                callback: (response: any) => {
                    /*var code_receiver_uri = apiUrl,
                        // Send auth code to your backend platform
                        xhr = new XMLHttpRequest();
                    xhr.open("POST", code_receiver_uri, true);
                    xhr.setRequestHeader(
                        "Content-Type",
                        "application/x-www-form-urlencoded"
                    );
                    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                    xhr.onload = function () {
                        console.log("Signed in as: " + xhr.responseText);
                    };
                    xhr.send("code=" + response.code);*/

                    console.log(response);
                    props.setAuthCode(response.code);

                    // After receipt, the code is exchanged for an access token and
                    // refresh token, and the platform then updates this web app
                    // running in user's browser with the requested calendar info.
                }
            })
        );
    }, []);

    function getAuthCode() {
        // Request authorization code and obtain user consent
        client.requestCode();
    }

    return (
        <div>
            <div id="googleSigninDiv"></div>
            <button id="uploadVideo" onClick={getAuthCode}>authorize app</button>
        </div>
    )
}

export default GoogleAuth;