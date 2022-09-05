import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Saved from './pages/Saved';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/saved" element={<Saved />} />
    </Routes>
  );
}

export default App;
