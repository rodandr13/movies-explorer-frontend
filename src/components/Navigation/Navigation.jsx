import {
  React, useCallback, useEffect, useState,
} from 'react';
import './Navigation.css';
import { Link, useLocation } from 'react-router-dom';
import HamburgerButton from '../HamburgerButton/HamburgerButton';
import useResize from '../../hooks/useResize';

function Navigation() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const windowWidth = useResize();
  const location = useLocation();
  const isMainPage = location.pathname === '/';
  const isMoviesPage = location.pathname === '/movies';
  const isSavedMoviesPage = location.pathname === '/saved-movies';
  const isMobile = windowWidth <= 800;

  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      setMenuOpen(false);
    }
  }, [windowWidth, isMenuOpen]);

  const handleMenuOpen = useCallback(() => {
    setMenuOpen((prevMenuState) => !prevMenuState);
  }, []);

  const isLoggedIn = true;
  return (
    <>
      {!isLoggedIn || isMainPage ? (
        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__item">
              <Link to="/signup" className={`menu__link menu__link_style_${isMainPage ? 'light' : 'dark'}`}>Регистрация</Link>
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
                <Link to="/" className={`menu__link menu__link_type_main ${isMainPage && isMobile ? 'menu__link-mobile_active' : ''}`}>Главная</Link>
              </li>
              <li className="menu__item">
                <Link to="/movies" className={`menu__link ${isMoviesPage && !isMobile ? 'menu__link_active' : ''} ${isMoviesPage && isMobile ? 'menu__link-mobile_active' : ''} menu__link_type_main menu__link_style_${isMainPage ? 'light' : 'dark'}`}>Фильмы</Link>
              </li>
              <li className="menu__item">
                <Link to="/saved-movies" className={`menu__link ${isSavedMoviesPage && !isMobile ? 'menu__link_active' : ''} ${isSavedMoviesPage && isMobile ? 'menu__link-mobile_active' : ''} menu__link_type_main menu__link_style_${isMainPage ? 'light' : 'dark'}`}>
                  Сохранённые фильмы
                </Link>
              </li>
              <li className="menu__item menu__item_type_profile">
                <Link to="/profile" className="profile-link">Аккаунт</Link>
              </li>
            </ul>
          </nav>
          <HamburgerButton handleMenuOpen={handleMenuOpen} isMenuOpen={isMenuOpen} />
          <Link to="/profile" className={`profile-link menu__item_type_desktop profile-link_style_${isMainPage ? 'dark' : 'light'}`}>Аккаунт</Link>
        </>
      )}
    </>
  );
}

export default Navigation;
