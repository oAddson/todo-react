import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import './logo.css';

const Logo = () => {
    return (
        <div className="logo">
            <Link to="/">
                <img src={logo} alt="Addson Azeredo Coutinho" />
            </Link>
        </div>
    )
}

export default Logo;