import GoogleAuth from './components/GoogleAuth';
import VideoUpload from './components/VideoUpload';
import './App.css'
import { useState } from 'react';

function App() {
  let [authCode, setAuthCode] = useState();
  
  return (
    <>
      <div className="padding-50 bg-slate-50">
        <h3 className="text-3xl font-bold underline">Youtube</h3>
        <GoogleAuth setAuthCode={setAuthCode}/>
        <VideoUpload authCode={authCode}/>
      </div>
    </>
  )
}

export default App
