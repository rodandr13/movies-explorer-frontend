import { useState } from 'react';
import { EMAIL_REGEX, NAME_REGEX } from '../utils/constants';

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

    let errorMessage = target.validationMessage;

    if (name === 'email' && !EMAIL_REGEX.test(value)) {
      errorMessage = 'Введите корректный email, например: example@example.com';
    } else if (name === 'name' && !NAME_REGEX.test(value)) {
      errorMessage = 'Имя пользователя может содержать только буквы, цифры, дефисы и подчеркивания';
    }

    setErrors({
      ...errors,
      [name]: errorMessage,
    });
    setIsValid(target.closest('form').checkValidity());
  };

  return {
    values, handleChange, errors, isValid, setValues,
  };
}

export default useFormValidation;
