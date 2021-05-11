import React, { Component } from 'react';
import './todo.css';
import TaskList from './taskList';

class Todo extends Component {

    render() { 
        return (
            <div className="todo">
                <div className="todo__container">
                    <h2>All To-do</h2>
                    <TaskList tasks={this.props.tasks} onTick={this.props.onTick} onDelete={this.props.onDelete} />
                </div>
            </div>
        );
    }
}
 
export default Todo;