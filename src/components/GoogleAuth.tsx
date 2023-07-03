import { useEffect, useState } from "react";

const client_id = import.meta.env.VITE_CLIENT_ID;
const scopes = import.meta.env.VITE_YOUTUBESCOPE;

function GoogleAuth(props: any) {
  const [ tokenClient, setTokenClient ] = useState({});

  function handleCallbackResponse(response: JSON): void{
    console.log(response)
  }

  function initGoogleAuth(): void{
    tokenClient.requestAccessToken(); 
  }

  useEffect(() => {
    /* TODO: make this.... better? */
    /* global google */
    google.accounts.id.initialize({
      client_id: client_id,
      callback: handleCallbackResponse
    });

    setTokenClient(
      google.accounts.oauth2.initTokenClient({
        client_id: client_id,
        scope: scopes,
        callback: (tokenResponse: any) => {
          console.log("Got Access Token: " + JSON.stringify(tokenResponse.access_token));
          props.setAccessToken(tokenResponse.access_token);
        }
      })
    );
  }, []);

  return (
    <div>
      <button id="uploadVideo" onClick={initGoogleAuth}>authorize app</button>
    </div>
  )
}

export default GoogleAuth;