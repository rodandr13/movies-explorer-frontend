import React from 'react';
import './HamburgerButton.css';
import { useLocation } from 'react-router-dom';

function HamburgerButton({ handleMenuOpen, isMenuOpen }) {
  const location = useLocation();
  const isMainPage = location.pathname === '/';
  return (
    <button
      onClick={handleMenuOpen}
      className={`hamburger hamburger__button ${isMenuOpen ? 'hamburger__button_type_close' : ''} `}
      aria-label="Меню"
      type="button"
    >
      <span className={`hamburger__button-line hamburger__button-line_style_${isMainPage ? 'light' : 'dark'}`} />
      <span className={`hamburger__button-line hamburger__button-line_style_${isMainPage ? 'light' : 'dark'}`} />
      <span className={`hamburger__button-line hamburger__button-line_style_${isMainPage ? 'light' : 'dark'}`} />
    </button>
  );
}

export default HamburgerButton;
