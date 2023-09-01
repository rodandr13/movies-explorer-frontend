import React from 'react';
import './TextField.css';

function TextField({ label }) {
  return (
    <label className="text-field" htmlFor="text-field__input">
      <span className="text-field__title">{label}</span>
      <input className="text-field__input" type="text" id="text-field__input" />
      <span className="text-field__error" />
    </label>
  );
}

export default TextField;
