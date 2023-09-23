import { useState, useEffect } from 'react';
import { EMAIL_REGEX, NAME_REGEX } from '../utils/constants';

function useFormValidation(initialValues = {}) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    let errorMessage = target.validationMessage;

    if (name === 'email' && !EMAIL_REGEX.test(value)) {
      errorMessage = 'Введите корректный email, например: example@example.com';
    } else if (name === 'name' && !NAME_REGEX.test(value)) {
      errorMessage = 'Имя пользователя может содержать только буквы, цифры, дефисы и подчеркивания';
    } else if (name === 'password' && value.length < 6) {
      errorMessage = 'Пароль должен содержать не менее 6 символов';
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  useEffect(() => {
    const allFieldsFilled = Object.values(values).every((value) => value.trim() !== '');
    const noErrors = Object.keys(errors).every((key) => !errors[key]);
    setIsValid(allFieldsFilled && noErrors);
  }, [errors, values]);

  return {
    values, handleChange, errors, isValid, setValues,
  };
}

export default useFormValidation;
