import React from 'react';
import './HamburgerButton.css';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

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

HamburgerButton.propTypes = {
  handleMenuOpen: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

export default HamburgerButton;
