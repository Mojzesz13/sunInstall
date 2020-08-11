import React from 'react';
import './barContainer.scss';

const BarContainer = ({ text }) => {
  return (
    <div className="barContainer">
      <div className="shapeContainer" />
      <p>{text}</p>
    </div>
  );
};

export default BarContainer;
