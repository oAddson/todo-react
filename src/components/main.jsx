import React, { Component } from 'react';
import Form from './form';
import Todo from './todo';
import Pomodoro from './pomodoro'
import './main.css';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                {id: 0, name: 'task-1', status: false }
            ],
            input: {name: '', status: false},
            page: 'home'
        }
    }
    createTask = (e) => {
        e.preventDefault();
        let {name, status} = this.state.input;
        const tasks = [...this.state.tasks]
        tasks.push({id: tasks.length ? tasks[tasks.length-1].id + 1 : 0, name: name, status: status})
        this.setState({ tasks: tasks, input: {name: '', status: false} });
    }
    handleChange = (e) => {
        let {name, status} = this.state.input;
        e.target.name === 'name' ? name = e.target.value : status = e.target.checked;
        this.setState({ input: {name: name, status: status} });
    }
    handleDelete = (taskId) => {
        const tasks = this.state.tasks.filter(task => task.id !== taskId);
        this.setState( {tasks: tasks} )
        
    }
    handleTick = (taskId) => {
        const tasks = this.state.tasks.map(task => {
            if (task.id === taskId) {
                task.status = !task.status;
            }
            return task;
        })
        this.setState( {tasks: tasks} )
    }

    render() { 
        return (
            <main>
                <Form values={this.state.input} onChange={this.handleChange} onClick={this.createTask} />
                <Todo tasks={this.state.tasks} onTick={this.handleTick} onDelete={this.handleDelete} />                
            </main>
        );
    }
}
 
export default Main;