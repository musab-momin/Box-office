import React from 'react';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route exact path='/'/>
      <Route>This is 404</Route>
    </Routes>
  );
}

export default App;
