import React, { Component } from 'react';
import logo from '../logo.svg';
import './logo.css';

class Logo extends Component {
    state = {  }
    style = {
        maxWidth: '20px'
    }
    render() { 
        return (
            <div className="logo">
                <a href="./">
                    <img src={logo} alt="Addson Azeredo Coutinho" />
                </a>
            </div>
        );
    }
}
 
export default Logo;