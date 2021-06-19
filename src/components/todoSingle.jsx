import React from 'react';
import {Link, useParams} from 'react-router-dom';
const TodoSingle = ({tasks}) => {
    const {id} = useParams();
    const todo = tasks.find(todo => todo.id === parseInt(id));
    const {name, status, description,category} = todo;

    return (
        <>
            <Link to="/todo">To-do</Link>
            <div>
                <h2>{name}</h2>
                <p>{todo.id}</p>
                <p>{description}</p>
                <div>{category}</div>
                {status ? 'true' : 'false'}
            </div>
        </>
    )
}

export default TodoSingle;