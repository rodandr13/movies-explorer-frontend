import {
  React, useCallback, useContext, useEffect, useState,
} from 'react';
import './Navigation.css';
import { Link, useLocation } from 'react-router-dom';
import HamburgerButton from '../HamburgerButton/HamburgerButton';
import useResize from '../../hooks/useResize';
import LoggedInContext from '../../context/LoggedInContext';
import { PATHS, MENU_STYLES, MOBILE_WIDTH } from '../../utils/constants';

function Navigation() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const windowWidth = useResize();
  const location = useLocation();
  const isMainPage = location.pathname === PATHS.MAIN;
  const isMoviesPage = location.pathname === PATHS.MOVIES;
  const isSavedMoviesPage = location.pathname === PATHS.SAVED_MOVIES;
  const isMobile = windowWidth <= MOBILE_WIDTH;

  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      setMenuOpen(false);
    }
  }, [windowWidth, isMenuOpen]);

  const handleMenuOpen = useCallback(() => {
    setMenuOpen((prevMenuState) => !prevMenuState);
  }, []);

  const isLoggedIn = useContext(LoggedInContext);
  return (
    <>
      {!isLoggedIn ? (
        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__item">
              <Link to={PATHS.SIGNUP} className={`menu__link ${isMainPage ? MENU_STYLES.LINK_LIGHT : MENU_STYLES.LINK_DARK}`}>Регистрация</Link>
            </li>
            <li className="menu__item">
              <Link to={PATHS.SIGNIN} className="menu__link menu__link_type_signin">Войти</Link>
            </li>
          </ul>
        </nav>
      ) : (
        <>
          <nav className={`menu menu__main ${isMenuOpen ? MENU_STYLES.OPEN : MENU_STYLES.CLOSE}`}>
            <ul className="menu__list menu__list_type_main">
              <li className="menu__item menu__item_type_mobile">
                <Link to={PATHS.MAIN} className={`menu__link menu__link_type_main ${isMainPage && isMobile ? MENU_STYLES.MOBILE_ACTIVE : ''}`}>Главная</Link>
              </li>
              <li className="menu__item">
                <Link to={PATHS.MOVIES} className={`menu__link ${isMoviesPage && !isMobile ? MENU_STYLES.LINK_ACTIVE : ''} ${isMoviesPage && isMobile ? MENU_STYLES.MOBILE_ACTIVE : ''} menu__link_type_main ${isMainPage ? MENU_STYLES.LINK_LIGHT : MENU_STYLES.LINK_DARK}`}>Фильмы</Link>
              </li>
              <li className="menu__item">
                <Link to={PATHS.SAVED_MOVIES} className={`menu__link ${isSavedMoviesPage && !isMobile ? MENU_STYLES.LINK_ACTIVE : ''} ${isSavedMoviesPage && isMobile ? MENU_STYLES.MOBILE_ACTIVE : ''} menu__link_type_main ${isMainPage ? MENU_STYLES.LINK_LIGHT : MENU_STYLES.LINK_DARK}`}>
                  Сохранённые фильмы
                </Link>
              </li>
              <li className="menu__item menu__item_type_profile">
                <Link to={PATHS.PROFILE} className="profile-link">Аккаунт</Link>
              </li>
            </ul>
          </nav>
          <HamburgerButton handleMenuOpen={handleMenuOpen} isMenuOpen={isMenuOpen} />
          <Link to={PATHS.PROFILE} className={`profile-link menu__item_type_desktop ${isMainPage ? MENU_STYLES.PROFILE_LINK_DARK : MENU_STYLES.PROFILE_LINK_LIGHT}`}>Аккаунт</Link>
        </>
      )}
      {isMenuOpen && <div className="overlay" />}
    </>
  );
}

export default Navigation;
