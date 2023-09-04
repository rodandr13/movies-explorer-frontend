import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
  const isLoggedIn = false;
  return (
    <>
      {isLoggedIn ? (
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
      ) : (
        <>
          <nav className="menu menu__main">
            <ul className="menu__list menu__list_type_main">
              <li className="menu__item">
                <Link to="/signup" className="menu__link menu__link_type_main">Фильмы</Link>
              </li>
              <li className="menu__item">
                <Link to="/signin" className="menu__link menu__link_type_main">Сохранённые фильмы</Link>
              </li>
            </ul>
          </nav>
          <Link to="/signin" className="profile-link">Аккаунт</Link>
        </>
      )}
    </>
  );
}

export default Navigation;
