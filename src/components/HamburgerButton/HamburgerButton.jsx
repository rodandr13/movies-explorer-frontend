import React from 'react';
import './HamburgerButton.css';
import { useLocation } from 'react-router-dom';
import { HAMBURGER_STYLES, PATHS } from '../../utils/constants';

function HamburgerButton({ handleMenuOpen, isMenuOpen }) {
  const location = useLocation();
  const isMainPage = location.pathname === PATHS.MAIN;
  return (
    <button
      onClick={handleMenuOpen}
      className={`hamburger hamburger__button ${isMenuOpen ? HAMBURGER_STYLES.BUTTON_CLOSE : ''} `}
      aria-label="Меню"
      type="button"
    >
      <span className={`hamburger__button-line ${isMainPage ? HAMBURGER_STYLES.LINE_LIGHT : HAMBURGER_STYLES.LINE_DARK}`} />
      <span className={`hamburger__button-line ${isMainPage ? HAMBURGER_STYLES.LINE_LIGHT : HAMBURGER_STYLES.LINE_DARK}`} />
      <span className={`hamburger__button-line ${isMainPage ? HAMBURGER_STYLES.LINE_LIGHT : HAMBURGER_STYLES.LINE_DARK}`} />
    </button>
  );
}

export default HamburgerButton;
