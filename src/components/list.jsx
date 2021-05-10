import React, { Component } from 'react';
import './list.css';

class List extends Component {
    state = {
        tasks: [
            {id: 1, name: 'homework', status: false},
            {id: 2, name: 'work', status: false},
            {id: 3, name: 'study', status: true}
        ]
    }
    render() {      
        return (
            <React.Fragment>
                {this.state.tasks.map(task => <div className="todo__item" key={task.id}><span className="todo__item--name">{task.name}</span><div className="todo__item--buttons"><button>Tick</button><button>Excluir</button></div></div>)}
            </React.Fragment>
        );
    }
}
 
export default List;