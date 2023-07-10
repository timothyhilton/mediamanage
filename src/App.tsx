import './App.css'
import { useState } from 'react';
import VideoUpload from './components/VideoUpload';
import FrontPage from './pages/FrontPage';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<FrontPage />} />
                <Route path="/video" element={<VideoUpload />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </>
    )
}

export default App
