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
        Strona główna
      </Link>
      <Link
        className="navItem"
        activeClass="active"
        to="need"
        spy={true}
        smooth={true}
        duration={500}
      >
        Twoja inwestycja
      </Link>
      <Link
        className="navItem"
        activeClass="active"
        to="hardware"
        spy={true}
        smooth={true}
        duration={500}
      >
        Dlaczego warto?
      </Link>
      <Link
        className="navItem"
        activeClass="active"
        to="installation"
        spy={true}
        smooth={true}
        duration={500}
      >
        Dotacja
      </Link>
      <Link
        className="navItem"
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
      >
        Kontakt
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
