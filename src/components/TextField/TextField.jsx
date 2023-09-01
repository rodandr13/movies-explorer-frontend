import React from 'react';
import PropTypes from 'prop-types';
import './TextField.css';

function TextField({ label, inputId }) {
  return (
    <label className="text-field" htmlFor={inputId}>
      <span className="text-field__title">{label}</span>
      <input className="text-field__input" type="text" id={inputId} />
      <span className="text-field__error" />
    </label>
  );
}

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
};

export default TextField;
