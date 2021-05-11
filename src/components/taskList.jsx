import React, { Component } from 'react';
import './taskList.css';

class List extends Component {
    render() {      
        return (
            <React.Fragment>
                {this.props.tasks.map(task => {
                    let itemClass = "todo__item"
                    if (task.status) {
                        itemClass+= " --active";
                    }
                    return (
                        <div className={itemClass} key={task.id}>
                            <span className="todo__item--name">{task.name}</span>
                            <div className="todo__item--buttons">
                                <button onClick={() => this.props.onTick(task.id)}>Tick</button>
                                <button onClick={() => this.props.onDelete(task.id)}>Excluir</button>
                            </div>
                        </div>
                    )
                })}
            </React.Fragment>
        );
    }
}
 
export default List;