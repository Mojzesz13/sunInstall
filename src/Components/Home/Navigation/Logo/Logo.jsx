import React from 'react';
import './Logo.scss';
import logo from './../../../../assets/LogoSunInstall.png';

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="logo Suninstall" />
    </div>
  );
};

export default Logo;
