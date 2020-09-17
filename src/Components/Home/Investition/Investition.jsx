import React from 'react';
import './Investition.scss';
import SeparateBar from '../../common/separateBar/separateBar';

const Investition = () => {
  return (
    <div className="homeInvestition" id="investition">
      <SeparateBar title="INWESTYCJA W PRZYSZŁOŚĆ" number="1" />
      <div>
        <div className="investitionContainer">
          <p>
            Zapewnij sobie i Twoim bliskim niezależność energetyczną. Pozwól, by
            Twój dom zyskał dobrą energię, a my załatwimy wszystkie formalności.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Investition;
