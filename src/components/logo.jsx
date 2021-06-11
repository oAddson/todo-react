import React from 'react';
import logo from '../logo.svg';
import './logo.css';

const Logo = () => {
    return (
        <div className="logo">
            <a href="./">
                <img src={logo} alt="Addson Azeredo Coutinho" />
            </a>
        </div>
    )
}

export default Logo;