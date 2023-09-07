import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';
import logo from '../../images/logo.svg';

function Logo() {
  return (
    <Link to="/" aria-label="Главная страница" className="logo">
      <img className="logo__image" src={logo} alt="Логотип" />
    </Link>
  );
}

export default Logo;
