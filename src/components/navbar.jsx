import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/todo">To-do</Link></li>
                <li><Link to="/pomodoro">Pomodoro</Link></li>
            </ul>
        </nav>
    );
}
 
export default NavBar;