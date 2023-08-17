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
import GuestBar from './components/NavBar/GuestBar';
import { UserInfo } from './models/UserInfo';

function App() {
    const [token, setToken] = useState("");
    const [userInfo, setUserInfo] = useState<UserInfo>({} as UserInfo);

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
                    <NavBar username={userInfo?.username}/>
                    ) : (
                    <GuestBar />
                )}
                <Routes>
                    <Route path="/" element={<FrontPage />} />
                    <Route path="/register" element={<RegisterPage setToken={setToken} setUserInfo={setUserInfo}/>} />
                    <Route path="/login" element={<LoginPage setToken={setToken} setUserInfo={setUserInfo}/>} />
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
