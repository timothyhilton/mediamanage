import './App.css'
import { useState } from 'react';
import VideoUpload from './components/VideoUpload';
import FrontPage from './pages/FrontPage';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {
    const [token, setToken] = useState("");

    return (
        <>
            <div className="bg-gray-50">
                <NavBar />
                <Routes>
                    <Route path="/" element={<FrontPage />} />
                    <Route path="/video" element={<VideoUpload />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage setToken={setToken}/>} />
                    <Route path="/home" element={<HomePage />} />
                </Routes>
            </div>
        </>
    )
}

export default App
