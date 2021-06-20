import React, { useEffect } from 'react';
import {useParams, useHistory} from 'react-router-dom';
import './todoSingle.css';

const TodoSingle = ({tasks, handleTick}) => {
    const {id} = useParams();
    const {name, status, description,category} = tasks.find(todo => todo.id === parseInt(id));
    const history = useHistory()

    useEffect(() => {
        const goBack = event => {
            if(event.keyCode === 27) {
                
                history.push('/todo')
            }
        }
        document.addEventListener('keydown' , goBack)

        return () => document.removeEventListener('keydown', goBack);
    }, [history])
    return (
        <>
            <div className="todo-single">
                <div>
                    <span className="category">{category}</span>
                    <h2 className="title">{name}</h2>
                </div>
                
                <p className="description">{description}</p>

                <button onClick={() => handleTick(parseInt(id))}>{status ? 'Reabrir' : 'Completar'}</button>
            </div>
        </>
    )
}

export default TodoSingle;