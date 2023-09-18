import { useState } from 'react';

function useFormValidation(initialValues, initialIsValid = false) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(initialIsValid);

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
    values, handleChange, errors, isValid, setValues,
  };
}

export default useFormValidation;
