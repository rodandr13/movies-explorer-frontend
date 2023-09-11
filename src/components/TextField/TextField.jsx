import React from 'react';
import './TextField.css';

function TextField({
  type, label, inputId, name, value, onChange, error, required = false, minLength, maxLength,
}) {
  return (
    <label className="text-field" htmlFor={inputId}>
      <span className="text-field__title">{label}</span>
      <input
        className={`text-field__input ${error ? 'text-field__input_error' : ''}`}
        type={type}
        id={inputId}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
      />
      <span className="text-field__error">{error}</span>
    </label>
  );
}

export default TextField;
