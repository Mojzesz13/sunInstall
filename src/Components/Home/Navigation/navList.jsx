import React from 'react';
import { Link } from 'react-scroll';
import './NavList.scss';

const NavList = () => {
  return (
    <nav className="headerLinks">
      <Link
        activeClass="active"
        to="investition"
        spy={true}
        smooth={true}
        duration={500}
      >
        Investition
      </Link>
      <Link
        activeClass="active"
        to="need"
        spy={true}
        smooth={true}
        duration={500}
      >
        Potrzeby
      </Link>
      <Link
        activeClass="active"
        to="hardware"
        spy={true}
        smooth={true}
        duration={500}
      >
        Hardware
      </Link>
      <Link
        activeClass="active"
        to="installation"
        spy={true}
        smooth={true}
        duration={500}
      >
        Installation
      </Link>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
      >
        Contact
      </Link>
      <Link
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
