import React from 'react';
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
                        <span className="todo__item--name">{name}</span>
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