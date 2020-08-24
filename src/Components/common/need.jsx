import React from 'react';
import './need.scss';

const NeedSection = ({ icon, title, text }) => {
  return (
    <div className="need">
      <div className="icon">{icon}</div>
      <div className="text">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default NeedSection;
