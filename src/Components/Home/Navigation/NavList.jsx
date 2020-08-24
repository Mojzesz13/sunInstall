import React from 'react';
import { Link } from 'react-scroll';
import './NavList.scss';

const NavList = ({ click }) => {
  return (
    <nav className={click ? 'headerLinks active' : 'headerLinks'}>
      <Link
        className="navItem"
        activeClass="active"
        to="investition"
        spy={true}
        smooth={true}
        duration={500}
      >
        Investition
      </Link>
      <Link
        className="navItem"
        activeClass="active"
        to="need"
        spy={true}
        smooth={true}
        duration={500}
      >
        Potrzeby
      </Link>
      <Link
        className="navItem"
        activeClass="active"
        to="hardware"
        spy={true}
        smooth={true}
        duration={500}
      >
        Hardware
      </Link>
      <Link
        className="navItem"
        activeClass="active"
        to="installation"
        spy={true}
        smooth={true}
        duration={500}
      >
        Installation
      </Link>
      <Link
        className="navItem"
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
      >
        Contact
      </Link>
      <Link
        className="navItem"
        activeClass="active"
        to="summary"
        spy={true}
        smooth={true}
        duration={500}
      >
        Summary
      </Link>
    </nav>
  );
};

export default NavList;
