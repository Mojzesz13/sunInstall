import React from 'react';
import './Need.scss';
import SeparateBar from '../../common/separateBar/separateBar2';
import NeedSection from '../../common/need';
import icon1 from '../../../assets/icon1.svg';
import icon2 from '../../../assets/icon2.svg';
import icon3 from '../../../assets/icon3.svg';
import icon4 from '../../../assets/icon4.svg';
import icon5 from '../../../assets/icon5.svg';
import icon6 from '../../../assets/icon6.svg';

const itemslist=[
  {
    id: 1,
    title:"DOFINANSOWANIE",
    text: "Pomożemy uzyskać Ci dofinansowanie do 5 tys. zł",
    icon: icon1
  },
    {
    id: 2,
    title:"NIEZALEŻNOŚĆ",
    text: "Zapewnij sobie niezależność energetyczną",
    icon: icon2,
  },
 {
    id: 3,
    title:"PODNIESIENIE WARTOŚCI NIERUCHOMOŚCI",
    text: "Twój dom zyska na wartości",
    icon: icon3,
  },
   {
    id: 4,
    title:"WYSOKA WYDAJNOŚĆ",
    text: "Panele fotowoltaiczne produkują energię także w pochmurne dni",
    icon: icon4,
  },
   {
    id: 5,
    title:"DBAŁOŚĆ O ŚRODOWISKO",
    text: "Redukcja CO2 praktycznie do zera",
    icon: icon5,
  },
   {
    id: 6,
    title:"ODNAWIALNE ŹRÓDŁO ENERGII",
    text: "Uzyskujesz energię przez cały rok",
    icon: icon6,
  },
]

const Need = () => {
  return (
    <div className="homeNeed" id="need">
      <SeparateBar title="ZALETY FOTOWOLTAIKI" number="2"/>
      <div className="needContainer">
        {itemslist.map((obj) =>(
          <NeedSection 
            key={obj.id} 
            icon={obj.icon} 
            title={obj.title} 
            text={obj.text} 
          />
        ))}
      </div>
    </div>
  );
};

export default Need;
