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
import ProfilePage from './pages/ProfilePage';
import VideoPage from './pages/VideoPage';



function App() {
    const [token, setToken] = useState("");
    const [userInfo, setUserInfo] = useState<UserInfo>({} as UserInfo);

    // returns false if the jwt is null or has expired
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

    // returns the jsx element, only if jwt is valid
    function Protected(page: JSX.Element): JSX.Element{
        if(isTokenValid()){
            return(page)
        }
        else{
            return(<Navigate to="/login" />)
        }
    }

    return (
        <div className="bg-gray-50 h-full">
            {isTokenValid() ? (
                <NavBar username={userInfo?.username} token={token}/>
                ) : (
                <GuestBar />
            )}
            <Routes>
                <Route path="/" element={<FrontPage />} />
                <Route path="/register" element={<RegisterPage setToken={setToken} setUserInfo={setUserInfo}/>} />
                <Route path="/login" element={<LoginPage setToken={setToken} setUserInfo={setUserInfo}/>} />
                <Route path='/home' element={Protected(<HomePage token={token} username={userInfo?.username} />)} />
                <Route path='/video' element={Protected(<VideoPage token={token} />)} />
                <Route 
                    path={`/users/${userInfo.username}`} 
                    element={Protected(<ProfilePage 
                        username={userInfo.username} 
                        email={userInfo.email}
                        token={token}
                    />)} 
                />
            </Routes>
        </div>
    )
}

export default App
