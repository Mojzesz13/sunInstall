import React, { useEffect } from 'react';
import './SeparateBar.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

const SeparateBar = ({ title, number }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  let ActiveSquare = '';
  switch (number) {
    case '1':
      ActiveSquare = 'first';
      break;
    case '2':
      ActiveSquare = 'second';
      break;
    case '3':
      ActiveSquare = 'third';
      break;
    case '4':
      ActiveSquare = 'fourth';
      break;
    case '5':
      ActiveSquare = 'fifth';
      break;
    default:
  }

  return (
    <div className="separateContainer">
      <div className="shapeHoldr">
        <div className="title">{title}</div>
        <div className="square" />
        <div className="line" />
        <div className="square" />
        <div className="line" />
        <div className="square">
          {' '}
          <div
            className={`AnimationSquare " ${ActiveSquare}`}
            data-aos="slide-left"
          >
            <span> {number}</span>
          </div>
        </div>
        <div className="line" />
        <div className="square" />
        <div className="line" />
        <div className="square" />
      </div>
    </div>
  );
};

export default SeparateBar;
