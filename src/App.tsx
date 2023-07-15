import './App.css'
import { useEffect, useState } from 'react';
import VideoUpload from './components/VideoUpload';
import FrontPage from './pages/FrontPage';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import jwt_decode from 'jwt-decode';
import { AuthToken } from './models/AuthToken';

function App() {
    const [token, setToken] = useState("");

    useEffect(() => {
        if(token != ""){
            let decodedToken = jwt_decode<AuthToken>(token);
            let currentDate = new Date();

            if (decodedToken.exp * 1000 < currentDate.getTime()) {
                console.log("Token expired.");
            } else {
                console.log("Valid token");   
            }
        }
    }, [token])

    return (
        <>
            <div className="bg-gray-50">
                <NavBar />  
                <Routes>
                    <Route path="/" element={<FrontPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage setToken={setToken}/>} />
                    <Route path="/home" element={<HomePage token={token} />} />
                </Routes>
            </div>
        </>
    )
}

export default App
