import React from 'react';
import './Summary.scss';
import BarContainer from '../../common/barContainer';
import logo from '../../../assets/LogoSunInstall.png';

const Summary = () => {
  const text = 'Zyskaj pełną niezależność z własną instalacją fotowoltaiczną.';

  return (
    <div className="summaryContainer" id="summary">
      <BarContainer text={text} />
      <div className="summaryContent">
        <img src={logo} alt="logo sun Install" />
        <h1>
          SUN<span>INSTALL</span>
        </h1>
      </div>
    </div>
  );
};

export default Summary;
