import React from 'react';
import './need.scss';

const Need = ({ icon, title, text }) => {
  return (
    <div className="need">
      <div className="icon">{icon}</div>
      <div className="title">{title}</div>
      <div className="text">{text}</div>
    </div>
  );
};

export default Need;
