import GoogleAuth from './components/GoogleAuth';
import VideoUpload from './components/VideoUpload';
import './App.css'
import { useState } from 'react';

function App() {
  let [accessToken, setAccessToken] = useState(null);
  
  return (
    <>
      <GoogleAuth setAccessToken={setAccessToken}/>
      <VideoUpload accessToken={accessToken}/>
    </>
  )
}

export default App
