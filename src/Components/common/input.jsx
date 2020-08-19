import React from 'react';
import './input.scss';

const Input = ({ name, value, label, type, error, placeholder, onChange }) => {
  return (
    <div className="inputContainer">
      <label htmlFor={name}>{label}</label>
      <div className="inputHolder">
        <input
          className="inputContent"
          name={name}
          value={value}
          placeholder={placeholder}
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
