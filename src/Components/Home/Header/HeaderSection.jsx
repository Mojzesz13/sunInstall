import React from 'react';
import './HeaderSection.scss';
import DecorationBar from '../../common/decorationBar';
import BarContainer from '../../common/barContainer';

const HeaderSection = () => {
  const text =
    'Zapewniamy kompleksową obsługę - od audytu, przez montaż, aż po pomoc w uzyskaniu dofinansowania.';

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
