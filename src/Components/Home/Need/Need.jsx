import React from 'react';
import './Need.scss';
import SeparateBar from '../../common/separateBar';
import NeedSection from '../../common/need';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const caffe = <FontAwesomeIcon icon={faCoffee} />;

const firstTitle = 'ODNAWIALNE ŹRÓDŁO ENERGII';
const secondTitle = 'DBAŁOŚĆ O ŚRODOWISKO';
const thirdTitle = 'NIEZALEŻNOŚĆ';
const forthTitle = 'ESTETYKA WYKONANIA';
const fifthTitle = 'PODNIESIENIE WARTOŚCI NIERUCHOMOŚCI';
const sixTitle = 'ŁATWY I SZYBKI MONTAŻ';

const firstText = 'energia słoneczna jest niewyczerpalna';
const secondText = 'redukcja CO2 praktycznie do zera';
const thirdText = 'staniesz się producentem energii';
const forthText = 'dopasujemy panele do Twojego dachu i gustu';
const fifthText = 'Twój dom zyska na wartości';
const sixText = 'nie jest wymagane pozwolenie na budowę';

const Need = () => {
  return (
    <div className="homeNeed" id="need">
      <SeparateBar title="ZALETY FOTOWOLTAIKI" number="2" />
      <div className="needContainer">
        <NeedSection icon={caffe} title={firstTitle} text={firstText} />
        <NeedSection icon={caffe} title={secondTitle} text={secondText} />
        <NeedSection icon={caffe} title={thirdTitle} text={thirdText} />
        <NeedSection icon={caffe} title={forthTitle} text={forthText} />
        <NeedSection icon={caffe} title={fifthTitle} text={fifthText} />
        <NeedSection icon={caffe} title={sixTitle} text={sixText} />
      </div>
    </div>
  );
};

export default Need;