import React, { useState, useEffect } from 'react';
import './SeparateBar.scss';
import 'aos/dist/aos.css';

const SeparateBar = ({ title, number }) => {
  const [slideDown, setSlideDown] = useState(true);

  const handelScroll = () => {
    let viewPosition = window.scrollY;
    if (viewPosition <= 50) {
      setSlideDown(true);
    } else if (viewPosition > 200) {
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
        <div
          className={slideDown ? 'square first' : 'square first animationTest'}
        >
          <div className={`AnimationSquare " ${ActiveSquare}`}>
            <span>{number}</span>
          </div>
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

// let titlePosition = '';
// switch (number) {
//   case '1':
//     titlePosition = 'firstPosition';
//     break;
//   case '2':
//     titlePosition = 'secondPosition';
//     break;
//   case '3':
//     titlePosition = 'thirdPosition';
//     break;
//   case '4':
//     titlePosition = 'fourthPosition';
//     break;
//   case '5':
//     titlePosition = 'fifthPosition';
//     break;
//   default:
// }
