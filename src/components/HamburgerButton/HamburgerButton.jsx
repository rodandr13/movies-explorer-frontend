import React from 'react';
import './HamburgerButton.css';

// eslint-disable-next-line react/prop-types
function HamburgerButton({ handleMenuOpen, isMenuOpen }) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <button
      onClick={handleMenuOpen}
      className={`hamburger hamburger__button ${isMenuOpen ? 'hamburger__button_type_close' : ''}`}
      aria-label="Меню"
      type="button"
    >
      <span className="hamburger__button-line" />
      <span className="hamburger__button-line" />
      <span className="hamburger__button-line" />
    </button>
  );
}

export default HamburgerButton;
