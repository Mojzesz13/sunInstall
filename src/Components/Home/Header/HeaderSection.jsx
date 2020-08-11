import React from 'react';
import './HeaderSection.scss';
import DecorationBar from '../../common/decorationBar';
import BarContainer from '../../common/barContainer';

const HeaderSection = () => {
  const text =
    'Pierwsze zdjęcie do zmiany, zastanowić się gdzie wstawić domek ruderkę i z jaką treścią';

  return (
    <div className="header">
      <BarContainer text={text} />
      <div className="sloganContainer">
        <p>Zainstalujemy słońce w Twoim domu.</p>
        <DecorationBar />
      </div>
    </div>
  );
};

export default HeaderSection;
