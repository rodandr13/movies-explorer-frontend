import React from "react";
import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from "../Navigation/Navigation";

function Header() {
    return (
        <div className="container_theme_dark">
            <header className='header'>
                <a href="#" className='logo header__logo'><img src={logo} alt=""/></a>
                <Navigation />
            </header>
        </div>
    )
}

export default Header;