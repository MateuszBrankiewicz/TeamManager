import React from 'react';
import './App.css';
import './pages/loginPage.css'
import LoginPage from './pages/loginPage';
import './assets/fonts.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* Dodaj inne trasy dla innych stron */}
      </Routes>
    </Router>
  );
};

  

export default App;
