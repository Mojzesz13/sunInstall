import React from 'react';
import { Link } from 'react-scroll';
import './NavList.scss';

const NavList = ({ click, dropdown }) => {
  return (
    <ul className={click ? 'headerLinks active' : 'headerLinks'}>
      <li className="navItem">
        <Link
          activeClass="active"
          to="investition"
          spy={true}
          smooth={true}
          duration={500}
        >
          Investition
        </Link>
      </li>
      <li className="navItem">
        <Link
          activeClass="active"
          to="need"
          spy={true}
          smooth={true}
          duration={500}
        >
          Potrzeby
        </Link>
      </li>
      <li className="navItem">
        <Link
          activeClass="active"
          to="hardware"
          spy={true}
          smooth={true}
          duration={500}
        >
          Hardware
        </Link>
      </li>
      <li className="navItem">
        <Link
          activeClass="active"
          to="installation"
          spy={true}
          smooth={true}
          duration={500}
        >
          Installation
        </Link>
      </li>
      <li className="navItem">
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
        >
          Contact
        </Link>
      </li>
      <li className="navItem">
        <Link
          activeClass="active"
          to="summary"
          spy={true}
          smooth={true}
          duration={500}
        >
          Summary
        </Link>
      </li>
    </ul>
  );
};

export default NavList;
