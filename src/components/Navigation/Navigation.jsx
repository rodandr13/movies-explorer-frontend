import {
  React, useCallback, useEffect, useState,
} from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import HamburgerButton from '../HamburgerButton/HamburgerButton';
import useResize from '../../hooks/useResize';

function Navigation() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const windowWidth = useResize();

  useEffect(() => {
    if (windowWidth > 800 && isMenuOpen) {
      setMenuOpen(false);
    }
  }, [windowWidth, isMenuOpen]);

  const handleMenuOpen = useCallback(() => {
    setMenuOpen((prevMenuState) => !prevMenuState);
  }, []);

  const isLoggedIn = true;
  return (
    <>
      {!isLoggedIn ? (
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
          <nav className={`menu menu__main menu__main_type_${isMenuOpen ? 'open' : 'close'}`}>
            <ul className="menu__list menu__list_type_main">
              <li className="menu__item menu__item_type_mobile">
                <Link to="/signup" className="menu__link menu__link_type_main">Главная</Link>
              </li>
              <li className="menu__item">
                <Link to="/movies" className="menu__link menu__link_type_main">Фильмы</Link>
              </li>
              <li className="menu__item">
                <Link to="/saved-movies" className="menu__link menu__link_type_main">
                  Сохранённые
                  фильмы
                </Link>
              </li>
              <li className="menu__item menu__item_type_profile">
                <Link to="/signin" className="profile-link">Аккаунт</Link>
              </li>
            </ul>
          </nav>
          <HamburgerButton handleMenuOpen={handleMenuOpen} isMenuOpen={isMenuOpen} />
          <Link to="/signin" className="profile-link menu__item_type_desktop">Аккаунт</Link>
        </>
      )}
    </>
  );
}

export default Navigation;
