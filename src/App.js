import React from 'react';
import './App.css';
import './main.scss';
import Home from './Components/Home/Home';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Home />
      </Router>
    </>
  );
}

export default App;
