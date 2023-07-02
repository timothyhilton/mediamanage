import { useEffect, useState } from "react";

const client_id = import.meta.env.VITE_CLIENT_ID;
const scopes = import.meta.env.VITE_YOUTUBESCOPE;

function GoogleAuth() {
  const [ user, setUser] = useState({});
  const [ tokenClient, setTokenClient ] = useState({});
  const [videoFile, setVideoFile] = useState(null);

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
          console.log(tokenResponse.access_token);
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