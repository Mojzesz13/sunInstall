import React from 'react';
import './Hardware.scss';
import SeparateBar from '../../common/separateBar/separateBar3';

const Hardware = () => {
  return (
    <div className="hardwareContainer" id="hardware">
      <SeparateBar title="Home Hardware" number="3" />
      <div className="contentContainer">
        <h1>FOTOWOLTAIKA DOPASOWANA DO TWOICH POTRZEB</h1>
      </div>
    </div>
  );
};

export default Hardware;
