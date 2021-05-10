import React from 'react';
import NavBar from './navbar';
import Logo from './logo';
import './header.css'

const Header = () => {
    return (
        <header className="header">
            <Logo />
            <NavBar />
        </header>
    );
}
 
export default Header;