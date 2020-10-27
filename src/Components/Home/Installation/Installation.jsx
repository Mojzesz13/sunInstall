import React from 'react';
import './Installation.scss';
import SeparateBar from '../../common/separateBar/separateBar4';
import TextContainer from '../../common/textContainer';
import firstPhoto from '../../../assets/workerFirst.jpg';
import secendPhoto from '../../../assets/workerSecond.jpg';
import thirdPhoto from '../../../assets/workerThird.jpg';

const Installation = () => {
  const firstParagraph = (
    <p>Zamień rachunek za prąd na energię z paneli fotowoltaicznych.</p>
  );
  const secondParagraph = (
    <p>Zainwestuj w instalację i otrzymaj dofinansowanie do 5 tys. zł.</p>
  );
  const thirdParagraph = (
    <p>To my załatwiamy nielubiane formalności. Ciesz się energią ze słońca!</p>
  );

  return (
    <div className="installationContainer " id="installation">
      <SeparateBar title="Proste, wygodne, opłacalne" number="4" />
      <div className="imagesContainer">
        <img src={firstPhoto} alt="WorkerPicture" />
        <img src={secendPhoto} alt="WorkerPicture" />
        <img src={thirdPhoto} alt="WorkerPicture" />
      </div>
      <div className="textContainer">
        <TextContainer text={firstParagraph} />
        <TextContainer text={secondParagraph} />
        <TextContainer text={thirdParagraph} />
      </div>
    </div>
  );
};

export default Installation;
