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
        <DecorationBar />
        <p>ZAINSTALUJEMY SŁOŃCE W TWOIM DOMU</p>
      </div>
    </div>
  );
};

export default Header;
