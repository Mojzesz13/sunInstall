import React from 'react';
import './Investition.scss';
import SeparateBar from '../../common/separateBar';

const Investition = () => {
  return (
    <div className="homeInvestition" id="investition">
      <SeparateBar title="INWESTYCJA W PRZYSZŁOŚĆ" number="1" />
      <div>
        <div className="investitionContainer">
          <p>
            Zapewnij sobie i swoim bliskim niezależność energetyczną. Pozwól, by
            Twój dom zyskał dobrą energię.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Investition;
