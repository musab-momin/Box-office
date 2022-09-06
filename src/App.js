import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Saved from './pages/Saved';
import Home from './pages/Home';
import Show from './pages/Show';


function App() {
  const theme = {
    mainColors: {
      blue: '#2400ff',
      gray: '#c6c6c6',
      dark: '#353535',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/show/:id" element={<Show />} />
        <Route exact path="/saved" element={<Saved />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
