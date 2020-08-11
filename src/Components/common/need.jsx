import React from 'react';
import './need.scss';

const NeedSection = ({ icon, title, text }) => {
  return (
    <div className="need">
      <div className="icon">{icon}</div>
      <div className="title">{title}</div>
      <div className="text">{text}</div>
    </div>
  );
};

export default NeedSection;
