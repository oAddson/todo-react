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
            timers : [
                {id: 0, endTime: 0, seconds: 300, defaultTime: 300, status: false},
                {id: 1, endTime: 0, seconds: 600, defaultTime: 600, status: false},
                {id: 2, endTime: 0, seconds: 1500, defaultTime: 1500, status: false},
            ],
            input: {name: '', status: false},
            page: 'home'
        }
    }

    componentDidMount() {
        setInterval(() => {
            const timers = this.state.timers.map(timer => {
                if (timer.status) {
                    timer.seconds = (timer.endTime - new Date().getTime())/1000;
                    if(timer.seconds <= 0) {
                        timer.status = false;
                        timer.seconds = 0;
                    }
                }
                return timer
            })
            this.setState( {timers: timers} )
        }, 1000);
    }

    resetTimer = () => {       
        console.log('reset')   
        const timers = this.state.timers.map((timer => {
            timer.seconds = timer.defaultTime;
            timer.status = false;
            return timer;
        }))
        this.setState( {timers: timers} )
    }

    handleTimer = (id) => {     
        const timers = this.state.timers.map((timer) => {
            if (timer.id === id) {                
                timer.status = !timer.status;
                if (timer.seconds < timer.defaultTime) {
                    if(timer.seconds === 0) {
                        this.resetTimer();
                    } else {
                        timer.endTime = new Date().getTime() + (timer.seconds * 1000)
                    }
                } else {
                    timer.endTime = new Date().getTime() + (timer.defaultTime * 1000); 
                }                            
            } else {
                timer.seconds = timer.defaultTime;
                if (timer.status) {
                    timer.status = false;                                     
                }                
            }        
            return timer;
        })
        this.setState( {timers: timers} )
    }
    
    createTask = (e) => {
        e.preventDefault();
        let {name, status} = this.state.input;
        if(name) {
            const tasks = [...this.state.tasks]
            tasks.push({id: tasks.length ? tasks[tasks.length-1].id + 1 : 0, name: name, status: status})
            this.setState({ tasks: tasks, input: {name: '', status: false} });
        }
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
        const tab = () => {
            switch (this.props.tab) {
                case 1:
                    return (<div>Home</div>);
                case 2:
                    return (
                        <React.Fragment>
                            <Form values={this.state.input} onChange={this.handleChange} onClick={this.createTask} />
                            <Todo tasks={this.state.tasks} onTick={this.handleTick} onDelete={this.handleDelete} /> 
                        </React.Fragment>
                    );
                case 3:
                    return (<Pomodoro timers={this.state.timers} reset={this.resetTimer} handleTimer={this.handleTimer} />);
                default:
                    return (<div>Tab not found</div>);
            }
        }
        return (
            <main>
                { tab() }
            </main>
        );
    }
}
 
export default Main;