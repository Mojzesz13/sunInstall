import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import NavList from './navList';
import Logo from './Logo/Logo';

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleOnClick = () => setClick(!click);

  return (
    <nav className="navBar">
      <Link to="/">
        <Logo />
      </Link>
      <div className="menuIcon" onClick={handleOnClick}>
        <i className={click ? 'fa fa-times' : 'fas fa-bars'} />
      </div>
      <NavList click={click} />
    </nav>
  );
};

export default NavBar;
