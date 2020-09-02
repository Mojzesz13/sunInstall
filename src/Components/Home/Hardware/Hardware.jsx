import React from 'react';
import './Hardware.scss';
import SeparateBar from '../../common/separateBar/separateBar3';

const Hardware = () => {
  return (
    <div className="hardwareContainer" id="hardware">
      <SeparateBar title="Home Hardware" number="3" />
      <div className="contentContainer">
        <h1>FOTOWOLTAIKA DOPASOWANA DO TWOICH POTRZEB</h1>
        <p>
          Co to znaczy? Wyliczymy Twoje zapotrzebowanie roczne na energię.
          Panele fotowoltaiczne dopasujemy do dachu oraz powierzchni (można je
          umieścić na gruncie, a z energii korzystać w domu). Na podstawie
          różnych parametrów dobierzemy odpowiednią dla Ciebie instalację.
        </p>
      </div>
    </div>
  );
};

export default Hardware;
