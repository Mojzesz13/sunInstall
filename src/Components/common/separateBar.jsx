import React, { useEffect } from 'react';
import './SeparateBar.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

const SeparateBar = ({ title, number }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  let squarePosition = '';
  switch (number) {
    case '1':
      squarePosition = 'firstSquare';
      break;
    case '2':
      squarePosition = 'secondSquare';
      break;
    case '3':
      squarePosition = 'thirdSquare';
      break;
    case '4':
      squarePosition = 'fourthSquare';
      break;
    case '5':
      squarePosition = 'fifthSquare';
      break;
    default:
  }

  let titlePosition = '';
  switch (number) {
    case '1':
      titlePosition = 'firstPosition';
      break;
    case '2':
      titlePosition = 'secondPosition';
      break;
    case '3':
      titlePosition = 'thirdPosition';
      break;
    case '4':
      titlePosition = 'fourthPosition';
      break;
    case '5':
      titlePosition = 'fifthPosition';
      break;
    default:
  }

  return (
    <div className="separateContainer">
      <div className="shapeHoldr">
        <div
          // data-aos="fade-down"
          // data-aos="slide-down"
          className={`square animation ${squarePosition}`}
        >
          <span>{number}</span>
        </div>
        <div className={`title ${titlePosition}`}>{title}</div>
        <div className="square">
          {/* <div className="test">{number}</div> */}
        </div>
        <div className="line" />
        <div className="square" />
        <div className="line" />
        <div className="square" />
        <div className="line" />
        <div className="square" />
        <div className="line" />
        <div className="square" />
      </div>
    </div>
  );
};

export default SeparateBar;
