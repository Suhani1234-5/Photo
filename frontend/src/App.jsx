import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/HomePage.jsx';
import LayoutPage from './pages/LayoutPage.jsx';
import CapturePage from './pages/CapturePage.jsx';
import CustomizePage from './pages/CustomizePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import './App.css';

export default function App() {
  const [selectedLayout, setSelectedLayout] = useState('layout-a');
  const [capturedPhotos, setCapturedPhotos] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('none');
  const [selectedFrameColor, setSelectedFrameColor] = useState('blue1');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route 
          path="/choose-layout" 
          element={
            <LayoutPage 
              selectedLayout={selectedLayout}
              setSelectedLayout={setSelectedLayout}
            />
          } 
        />
        <Route 
          path="/capture" 
          element={
            <CapturePage 
              selectedLayout={selectedLayout}
              capturedPhotos={capturedPhotos}
              setCapturedPhotos={setCapturedPhotos}
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
            />
          } 
        />
        <Route 
          path="/customize" 
          element={
            <CustomizePage 
              capturedPhotos={capturedPhotos}
              selectedFilter={selectedFilter}
              selectedFrameColor={selectedFrameColor}
              setSelectedFrameColor={setSelectedFrameColor}
            />
          } 
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}