import React from 'react';
import './input.scss';

const Input = ({ name, value, label, type, error, onChange }) => {
  return (
    <div className="inputHolder">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        value={value}
        id={name}
        onChange={onChange}
        type={type}
        className="inputContent"
      />
      {error && <div className="errorMessage">{error}</div>}
    </div>
  );
};

export default Input;
