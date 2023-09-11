import React from 'react';
import './Header.css';
import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';

function Header() {
  const location = useLocation();
  return (
    <div className={`container_theme_${location.pathname === '/' ? 'dark' : 'light'}`}>
      <header className="header">
        <Logo />
        <Navigation />
      </header>
    </div>
  );
}

export default Header;
