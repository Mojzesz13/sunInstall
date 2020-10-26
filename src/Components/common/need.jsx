import React from 'react';
import './need.scss';

const NeedSection = ({ icon, title, text }) => {
  return (
    <div className="need">
      <img className="icon" src={icon} alt={title}/>
      
        <h1>{title}</h1>
        <p>{text}</p>
      
    </div>
  );
};

export default NeedSection;
