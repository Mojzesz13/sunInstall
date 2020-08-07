import React from 'react';
import NavBar from '../Navigation/navBar';
import Header from './header';
import './HomeHeader.scss';

const HomeHeader = () => {
  return (
    <div className="headerContainer" id="main">
      <NavBar />
      <Header />
    </div>
  );
};

export default HomeHeader;
