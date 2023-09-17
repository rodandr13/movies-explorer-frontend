import React from 'react';
import '../../styles/auth.css';
import './Login.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import TextField from '../TextField/TextField';
import SubmitButton from '../SubmitButton/SubmitButton';
import useFormValidation from '../../hooks/useFormValidation';
import Form from '../Form/Form';

function Login({ handleLogin }) {
  const {
    values, handleChange, errors, isValid,
  } = useFormValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(values);
  };

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
        <SubmitButton text="Войти" disabled={!isValid} blockClassName="login" />
      </Form>
      <p className="auth__text">
        Ещё не зарегистрированы?
        <Link className="auth__link" to="/signup"> Регистрация</Link>
      </p>
    </main>
  );
}

export default Login;
