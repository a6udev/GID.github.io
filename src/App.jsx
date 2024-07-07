import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Main from './pages/Main';

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}


export default App;
