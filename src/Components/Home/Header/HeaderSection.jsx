import React from 'react';
import { Link } from 'react-scroll';
import './HeaderSection.scss';
import DecorationBar from '../../common/decorationBar';

const HeaderSection = () => {
  return (
    <div className="header">
      <div className="sloganContainer">
        <p>Zainstalujemy słońce w Twoim domu.</p>
        <DecorationBar />
      </div>
      <Link
        className="navItem"
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
      >
        Skontaktuj się z nami
      </Link>
    </div>
  );
};

export default HeaderSection;
