import React, { Component } from 'react';
import './todo.css';
import List from './list';

class Todo extends Component {
    state = {  }
    render() { 
        return (
            <div className="todo">
                <div className="todo__container">
                    <h2>All To-do</h2>
                    <List />
                </div>
            </div>
        );
    }
}
 
export default Todo;