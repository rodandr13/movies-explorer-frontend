import { useState } from 'react';

function useFormValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setValues({
      ...values,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: target.validationMessage,
    });
    setIsValid(target.closest('form').checkValidity());
  };

  return {
    values, handleChange, errors, isValid,
  };
}

export default useFormValidation;
