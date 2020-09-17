import React, { useState, useEffect } from 'react';
import './SeparateBar.scss';
import 'aos/dist/aos.css';

const SeparateBar = ({ title, number }) => {
  const [slideDown, setSlideDown] = useState(false);

  const handelScroll = () => {
    let viewPosition = window.scrollY;
    if (viewPosition <= 2700) {
      setSlideDown(true);
    } else if (viewPosition > 2850) {
      setSlideDown(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handelScroll);
    return () => {
      window.addEventListener('scroll', handelScroll);
    };
  });

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
        <div className="square"> </div>
        <div className="line" />
        <div
          className={slideDown ? 'square second' : 'square secon animationTest'}
        >
          <div className={`AnimationSquare " ${ActiveSquare}`}>
            <span> {number}</span>
          </div>
        </div>
        <div className="line" />
        <div className="square" />
      </div>
    </div>
  );
};

export default SeparateBar;
