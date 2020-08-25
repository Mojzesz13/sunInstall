import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import NavList from './NavList';
import Logo from './Logo/Logo';
import Hamburger from './../../common/hamburger';

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleOnClick = () => setClick(!click);

  return (
    <nav className="navBar">
      <Link to="/">
        <Logo />
      </Link>
      <div className="menuIcon" onClick={handleOnClick}>
        <Hamburger click={click} />
      </div>
      <NavList click={click} />
    </nav>
  );
};

export default NavBar;
