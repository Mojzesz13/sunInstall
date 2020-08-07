import React from 'react';
import './SeparateBar.scss';

const SeparateBar = ({ title, number }) => {
  return (
    <div className="separateContainer">
      <div className="shapeHoldr">
        <div className="square animation">
          <span>{number}</span>
        </div>
        <div className="square" />
        <div className="line" />
        <div className="square" />
        <div className="line" />
        <div className="square" />
        <div className="line" />
        <div className="square" />
        <div className="line" />
        <div className="square" />
      </div>
      <div className="title">{title}</div>
    </div>
  );
};

export default SeparateBar;
