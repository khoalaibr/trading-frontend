import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signals from './pages/Signals';

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signals" element={<Signals />} />
      </Routes>
    </div>
  );
};

export default App;
