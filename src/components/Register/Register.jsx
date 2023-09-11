import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import TextField from '../TextField/TextField';
import SubmitButton from '../SubmitButton/SubmitButton';
import Form from '../Form/Form';
import useFormValidation from '../../hooks/useFormValidation';

function Register() {
  const {
    values, handleChange, errors, isValid,
  } = useFormValidation();
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <main className="register auth">
      <Logo />
      <h1 className="auth__title">Добро пожаловать!</h1>
      <Form blockClassName="auth" handleSubmit={handleSubmit} noValidate>
        <TextField
          type="text"
          label="Имя"
          inputId="register-name"
          name="name"
          value={values.name || ''}
          onChange={handleChange}
          error={errors.name || ''}
          minLength="2"
          maxLength="30"
          required
        />
        <TextField
          type="email"
          label="E-mail"
          inputId="login-email"
          name="email"
          value={values.email || ''}
          onChange={handleChange}
          error={errors.email || ''}
          required
        />
        <TextField
          type="password"
          label="Пароль"
          inputId="login-password"
          name="password"
          value={values.password || ''}
          onChange={handleChange}
          error={errors.password || ''}
          required
        />
        <SubmitButton text="Зарегистрироваться" blockClassName="auth" disabled={!isValid} />
      </Form>
      <p className="auth__text">
        Уже зарегистрированы?
        <Link to="/signin" className="auth__link"> Войти</Link>
      </p>
    </main>
  );
}

export default Register;
