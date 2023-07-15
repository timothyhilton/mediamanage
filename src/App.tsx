import './App.css'
import { useEffect, useState } from 'react';
import VideoUpload from './components/VideoUpload';
import FrontPage from './pages/FrontPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import jwt_decode from 'jwt-decode';
import { AuthToken } from './models/AuthToken';

function App() {
    const [token, setToken] = useState("");
    const [home, setHome] = useState(<HomePage />);

    useEffect(() => {
        if(isTokenValid()){
            setHome(<HomePage />);
        }
        else{
            setHome(<Navigate to="/login" />);
        }
    }, [token])

    function isTokenValid(): boolean{
        if(token == "") { return false; }
        
        let decodedToken = jwt_decode<AuthToken>(token);
        let currentDate = new Date();

        if (decodedToken.exp * 1000 < currentDate.getTime()) {
            console.log("Token expired");
            return true;
        } else {
            console.log("Valid token");
            return true;
        }
    }

    return (
        <>
            <div className="bg-gray-50">
                <NavBar />  
                <Routes>
                    <Route path="/" element={<FrontPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage setToken={setToken}/>} />
                    <Route path="/home" element={home}/>
                </Routes>
            </div>
        </>
    )
}

export default App
