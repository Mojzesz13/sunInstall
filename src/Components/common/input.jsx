import React from 'react';
import './input.scss';

const Input = ({ name, value, label, type, error, onChange }) => {
  return (
    <div className="inputContainer">
      <label htmlFor={name}>{label}</label>
      <div className="inputHolder">
        <input
          className="inputContent"
          name={name}
          value={value}
          id={name}
          onChange={onChange}
          type={type}
        />
        {error && <div className="errorMessage">{error}</div>}
      </div>
    </div>
  );
};

export default Input;
