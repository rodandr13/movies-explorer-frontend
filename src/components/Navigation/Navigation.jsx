import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <Link to="/signup" className="menu__link">Регистрация</Link>
        </li>
        <li className="menu__item">
          <Link to="/signin" className="menu__link menu__link_type_signin">Войти</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
