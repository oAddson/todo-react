import React, { Component } from 'react';
import Form from './form';
import Todo from './todo';
import './main.css';

class Main extends Component {
    
    render() { 
        return (
            <main>
                <Form />
                <Todo />
            </main>
        );
    }
}
 
export default Main;