import React from 'react';
import './todo.css';
import TaskList from './taskList';

const Todo = ({tasks, onTick, onDelete}) => {
    return (
        <>
            <div className="todo">
                <div className="todo__container">
                    <h2>All To-do</h2>
                    <TaskList tasks={tasks} onTick={onTick} onDelete={onDelete} />
                </div>
            </div>
        </>
    );
}

export default Todo;