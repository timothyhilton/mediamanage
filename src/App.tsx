import './App.css'
import { useEffect, useState } from 'react';
import FrontPage from './pages/FrontPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import jwt_decode from 'jwt-decode';
import { AuthToken } from './models/AuthToken';
import { useNavigate } from "react-router-dom"
import GuestBar from './components/NavBar/GuestBar';

function App() {
    const [token, setToken] = useState("");

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
                {isTokenValid() ? (
                    <NavBar token={token}/>
                    ) : (
                    <GuestBar />
                )}
                <Routes>
                    <Route path="/" element={<FrontPage />} />
                    <Route path="/register" element={<RegisterPage setToken={setToken} />} />
                    <Route path="/login" element={<LoginPage setToken={setToken}/>} />
                    <Route path='/home'
                        element=
                        {isTokenValid() ? (
                            <HomePage token={token} />
                            ) : (
                            <Navigate to="/login" />
                        )}  
                    />
                </Routes>
            </div>
        </>
    )
}

export default App
