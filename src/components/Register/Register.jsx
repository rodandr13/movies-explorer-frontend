import React from 'react';
import './Register.css';
import Logo from '../Logo/Logo';
import TextField from '../TextField/TextField';
import SubmitButton from '../SubmitButton/SubmitButton';

function Register() {
  return (
    <section className="register">
      <Logo />
      <h1 className="register__title">Добро пожаловать!</h1>
      <form className="register__form" action="#">
        <TextField label="Имя" inputId="register-name" />
        <TextField label="E-mail" inputId="register-email" />
        <TextField label="Пароль" inputId="register-password" />
        <SubmitButton text="Зарегистрироваться" />
      </form>
      <p className="register__text">
        Уже зарегистрированы?
        <a className="register__link" href="/"> Войти</a>
      </p>
    </section>
  );
}

export default Register;
