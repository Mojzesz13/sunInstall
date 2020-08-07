import React from 'react';
import './Header.scss';
import DecorationBar from '../../common/decorationBar';

const Header = () => {
  return (
    <div className="header">
      <div className="barContainer">
        <div className="shapeContainer"></div>
        <p>
          Pierwsze zdjęcie do zmiany, zastanowić się gdzie wstawić domek ruderkę
          i z jaką treścią
        </p>
      </div>
      <div className="sloganContainer">
        <p>Zainstalujemy słońce w Twoim domu.</p>
        <DecorationBar />
      </div>
    </div>
  );
};

export default Header;
