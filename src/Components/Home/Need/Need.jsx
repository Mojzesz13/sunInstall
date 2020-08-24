import React from 'react';
import './Need.scss';
import SeparateBar from '../../common/separateBar/separateBar2';
import NeedSection from '../../common/need';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const caffe = <FontAwesomeIcon icon={faCoffee} />;

const firstTitle = 'DOFINANSOWANIE';
const secondTitle = 'NIEZALEŻNOŚĆ';
const thirdTitle = 'PODNIESIENIE WARTOŚCI NIERUCHOMOŚCI';
const forthTitle = 'WYSOKA WYDAJNOŚĆ';
const fifthTitle = 'DBAŁOŚĆ O ŚRODOWISKO';
const sixTitle = 'ODNAWIALNE ŹRÓDŁO ENERGII';

const firstText = 'Pomożemy uzyskać Ci dofinansowanie do 5 tys. zł';
const secondText = 'Zapewnij sobie niezależność energetyczną';
const thirdText = 'Twój dom zyska na wartości';
const forthText =
  'Panele fotowoltaiczne produkują energię także w pochmurne dni';
const fifthText = 'Redukcja CO2 praktycznie do zera';
const sixText = 'Uzyskujesz energię przez cały rok';

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
