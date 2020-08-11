import React from 'react';
import './Installation.scss';
import SeparateBar from '../../common/separateBar';
import TextContainer from '../../common/textContainer';
import PictureFirst from '../../../assets/workerFirst.jpg';
import PictureSecond from '../../../assets/workerSecond.jpg';
import PictureThird from '../../../assets/workerFirst.jpg';

const Installation = () => {
  const firstParagraph = (
    <p>
      <span>Zamień rachunek za prąd </span> na spłatę paneli fotowoltaicznych,
      by później cieszyć się darmowym prądem.{' '}
    </p>
  );
  const secondParagraph = (
    <p>
      <span> Część lub całość inwestycji </span> możesz spłacić w ratach, a
      nawet otrzymać dofinansowanie.{' '}
    </p>
  );
  const thirdParagraph = (
    <p>
      <span>To my załatwiamy nielubiane formalności.</span>A Ty możesz na
      spokojnie zastanowić się, na co wydasz zaoszczędzone pieniądze.
    </p>
  );

  return (
    <div className="installationContainer " id="installation">
      <SeparateBar title="Proste, wygodne, opłacalne" number="4" />
      <div className="imagesContainer">
        <img
          className="installationPicture one"
          src={PictureFirst}
          alt="WorkerPicture"
        />
        <img
          className="installationPicture one"
          src={PictureSecond}
          alt="WorkerPicture"
        />
        <img
          className="installationPicture one"
          src={PictureThird}
          alt="WorkerPicture"
        />
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