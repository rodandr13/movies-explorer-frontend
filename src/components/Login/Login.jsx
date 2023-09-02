import React from 'react';
import './Login.css';
import Logo from '../Logo/Logo';
import TextField from '../TextField/TextField';
import SubmitButton from '../SubmitButton/SubmitButton';

function Login() {
  return (
    <section className="login">
      <Logo />
      <h1 className="login__title">Рады видеть!</h1>
      <form className="login__form" action="#">
        <TextField label="E-mail" inputId="login-email" />
        <TextField label="Пароль" inputId="login-password" />
        <SubmitButton text="Войти" />
        <p className="login__text">
          Ещё не зарегистрированы?
          <a className="login__link" href="/"> Регистрация</a>
        </p>
      </form>
    </section>
  );
}

export default Login;
