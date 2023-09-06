import React from 'react';
import './Form.css';

function Form({
  children, handleSubmit, blockClassName = '', noValidate,
}) {
  const className = `form ${blockClassName ? `${blockClassName}__form` : ''}`;
  return (
    <form className={className} onSubmit={handleSubmit} noValidate={noValidate}>
      {children}
    </form>
  );
}

export default Form;
