import React from 'react';
import './SubmitButton.css';

function SubmitButton({ text, blockClassName, disabled }) {
  const classes = `${blockClassName}__submit-button submit-button`;
  return (
    <button className={classes} type="submit" disabled={disabled}>{text}</button>
  );
}

export default SubmitButton;
