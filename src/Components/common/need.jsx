import React from 'react';
import './need.scss';

const NeedSection = ({ icon, title, text }) => {
  return (
    <div className="needHolder">
      <img className="icon" src={icon} alt={title}/>
      <div className="textHolder"> 
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default NeedSection;
