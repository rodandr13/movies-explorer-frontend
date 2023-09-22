import { useState, useEffect } from 'react';
import { EMAIL_REGEX, NAME_REGEX } from '../utils/constants';

function useFormValidation(initialValues = {}, currentName = '', currentEmail = '', initialIsValid = false) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(initialIsValid);

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
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  useEffect(() => {
    setIsValid(Object.keys(errors).every((key) => !errors[key]));
  }, [errors]);

  useEffect(() => {
    setValues({ name: currentName, email: currentEmail });
  }, [currentName, currentEmail]);

  return {
    values, handleChange, errors, isValid, setValues,
  };
}

export default useFormValidation;
