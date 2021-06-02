import React from 'react';
import NavBar from './navbar';
import Logo from './logo';
import './header.css'

const Header = (props) => {
    return (
        <header className="header">
            <Logo />
            <NavBar setTab={ props.setTab } />
        </header>
    );
}
 
export default Header;