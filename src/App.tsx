import GoogleAuth from './components/GoogleAuth';
import VideoUpload from './components/VideoUpload';
import './App.css'
import { useState } from 'react';

function App() {
  let [authCode, setAuthCode] = useState();
  
  return (
    <>
      <GoogleAuth setAuthCode={setAuthCode}/>
      <VideoUpload authCode={authCode}/>
    </>
  )
}

export default App
