import React, { useState } from 'react';
import './scrollUpButton.scss';
import upArrow from '../../assets/up.png'

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <div
      className="scrollTop"
      onClick={scrollTop}
      style={{ height: 40, display: showScroll ? 'flex' : 'none' }}
    >
      <img className="upArrow" src={upArrow} alt="upArrow"/>
    </div>
  );
};

export default ScrollArrow;
