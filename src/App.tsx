import GoogleAuth from './components/GoogleAuth';
import VideoUpload from './components/VideoUpload';
import './App.css'
import { useState } from 'react';

function App() {
  let [authCode, setAuthCode] = useState();
  
  return (
    <>
      <div className="platformContainer">
        <h3>Youtube</h3>
        <GoogleAuth setAuthCode={setAuthCode}/>
        <VideoUpload authCode={authCode}/>
      </div>
    </>
  )
}

export default App
