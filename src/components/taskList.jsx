import React from 'react';
import {Link} from 'react-router-dom';
import './taskList.css';

const List = ({tasks, onDelete, onTick}) => {
    return (
        <>
            {tasks.map(task => {
                const {id, status, name} = task;
                let itemClass = "todo__item"
                if (status) {
                    itemClass+= " --active";
                }
                return (
                    <div className={itemClass} key={id}>
                        <Link 
                            to={`/todo/${id}`}>
                            <span className="todo__item--name">{name}</span>
                        </Link>
                        <div className="todo__item--buttons">
                            <button onClick={() => onTick(id)}>Check</button>
                            <button onClick={() => onDelete(id)}>Delete</button>
                        </div>
                    </div>
                )
            })}
        </>
    );
}
 
export default List;