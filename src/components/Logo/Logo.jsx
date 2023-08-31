import React from "react";
import './Logo.css';
import logo from '../../images/logo.svg';


function Logo() {
    return (
        <a href="#" className='logo'><img className='logo__image' src={logo} alt=""/></a>
    )
}

export default Logo;