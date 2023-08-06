import React from 'react';
import './App.css';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import './assets/fonts.css';


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const App = () => {
  return (
  
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path='/register' element ={<RegisterPage/>}/>
      </Routes>
    </Router>
  );
};

  

export default App;
