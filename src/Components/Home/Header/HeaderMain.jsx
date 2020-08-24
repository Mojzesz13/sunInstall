import React from 'react';
import HeaderSection from './HeaderSection';
import './HeaderMain.scss';
import NavBar from '../Navigation/NavBar';

const Header = () => {
  return (
    <div className="headerContainer" id="main">
      <NavBar />
      <HeaderSection />
    </div>
  );
};

export default Header;
