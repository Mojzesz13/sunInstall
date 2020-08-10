import React from 'react';
import './App.css';
import './main.scss';
import Home from './Components/Home/home';
import ScrollArrow from './Components/common/scrollUpButton';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Home />
        <ScrollArrow />
      </Router>
    </>
  );
}

export default App;
