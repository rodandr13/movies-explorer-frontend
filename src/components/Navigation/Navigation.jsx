import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item"><a className="menu__link" href="#">Регистрация</a></li>
        <li className="menu__item"><a className="menu__link menu__link_type_signin" href="#">Войти</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
