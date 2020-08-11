import React from 'react';
import './Summary.scss';
import BarContainer from '../../common/barContainer';
import Logo from '../../../assets/logo2.jpg';

const Summary = () => {
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla diam tristique, ultricies velit sed.';

  return (
    <div className="summaryContainer" id="summary">
      <BarContainer text={text} />
      <div className="summaryContent">
        <img src={Logo} alt="logo" />
        <h1>
          SUN<span>INSTALL</span>
        </h1>
      </div>
    </div>
  );
};

export default Summary;
