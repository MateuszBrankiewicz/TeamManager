import React from 'react';
import './App.css';
import './pages/loginPage.css'
import './pages/registerPage.css'
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import './assets/fonts.css';
import './components/loginPage/Buttons.css'
import './components/registerPage/regButton.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const App = () => {
  return (
    <RegisterPage/>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<RegisterPage />} />
    //     {/* Dodaj inne trasy dla innych stron */}
    //   </Routes>
    // </Router>
  );
};

  

export default App;
