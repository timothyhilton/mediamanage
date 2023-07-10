import './App.css'
import { useState } from 'react';
import VideoUpload from './components/VideoUpload';
import FrontPage from './pages/FrontPage';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<FrontPage />} />
                <Route path="/video" element={<VideoUpload />} />
            </Routes>
        </>
    )
}

export default App
