import React from 'react';
import './Header.css';
import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import { HEADER_STYLES, PATHS } from '../../utils/constants';

function Header() {
  const location = useLocation();
  const containerTheme = location.pathname === PATHS.MAIN
    ? HEADER_STYLES.CONTAINER_DARK
    : HEADER_STYLES.CONTAINER_LIGHT;
  return (
    <div className={containerTheme}>
      <header className="header">
        <Logo />
        <Navigation />
      </header>
    </div>
  );
}

export default Header;
