import React from "react";
import './Header.css';
import Navigation from "../Navigation/Navigation";
import Logo from '../Logo/Logo'

function Header() {
    return (
        <div className="container_theme_dark">
            <header className='header'>
                <Logo />
                <Navigation />
            </header>
        </div>
    )
}

export default Header;