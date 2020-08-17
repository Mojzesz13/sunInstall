import React from 'react';
import NavBar from '../Navigation/navBar';
import HeaderSection from './HeaderSection';
import './HeaderMain.scss';
import ScrollArrow from '../../common/scrollUpButton';

const Header = () => {
  return (
    <div className="headerContainer" id="main">
      <NavBar />
      <HeaderSection />
    </div>
  );
};

export default Header;
