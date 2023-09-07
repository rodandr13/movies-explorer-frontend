import React, { useCallback } from 'react';
import '../../styles/auth.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import TextField from '../TextField/TextField';
import SubmitButton from '../SubmitButton/SubmitButton';
import useFormValidation from '../../hooks/useFormValidation';
import Form from '../Form/Form';

function Login() {
  const {
    values, handleChange, errors, isValid,
  } = useFormValidation();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <main className="login auth">
      <Logo />
      <h1 className="auth__title">Рады видеть!</h1>
      <Form blockClassName="auth" handleSubmit={handleSubmit} noValidate>
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
        <SubmitButton text="Войти" disabled={!isValid} blockClassName="auth" />
      </Form>
      <p className="auth__text">
        Ещё не зарегистрированы?
        <Link className="auth__link" to="/signup"> Регистрация</Link>
      </p>
    </main>
  );
}

export default Login;
