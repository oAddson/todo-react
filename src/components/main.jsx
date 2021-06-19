import React, { useEffect, useReducer, useState } from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import Home from './home'
import Form from './form';
import Todo from './todo';
import Pomodoro from './pomodoro';
import Timer from './timer';
import MiniTimer from './miniTimer';
import Input from './input';
import Modal from './modal';
import './main.css';
import sound from '../assets/audio/success.mp3';
import TodoSingle from './todoSingle';

function reducer (todos, action) {
    switch (action.type) {
        case 'ADD_TASK':
            if (action.payload.name) {
                localStorage.setItem('@todo-list/todos', JSON.stringify([...todos.tasks, action.payload]))
                return {...todos, tasks: [...todos.tasks, action.payload]};
            }
            return {...todos}
        case 'REMOVE_TASK':
            const newTasks = todos.tasks.filter(task => task.id !== action.payload)
            localStorage.setItem('@todo-list/todos', JSON.stringify([...newTasks]))
            return {...todos, tasks: [...newTasks]}
        case 'TICK_TASK':
            const newTickedTasks = todos.tasks.map(task => {return task.id === action.payload ? {...task, status: !task.status} : task})
            localStorage.setItem('@todo-list/todos', JSON.stringify([...newTickedTasks]))
            return {...todos, tasks: [...newTickedTasks]};
        default:
            throw new Error();
    }
}

const initialTimers = [
    {id: 0, status: false, defaultTime: 300, final: 0, seconds: 300},
    {id: 1, status: false, defaultTime: 600, final: 0, seconds: 600},
    {id: 2, status: false, defaultTime: 1500, final: 0, seconds: 1500}
]

const initialtodos = {tasks: JSON.parse(localStorage.getItem('@todo-list/todos')) || []};

const Main = () => {
    const [name, setName] = useState('');
    const [status, setStatus] = useState(false);
    const [todos, dispatch] = useReducer(reducer, initialtodos);
    const [timers, setTimers] = useState(initialTimers);
    const [modal, setModal] = useState({status: false, message: ''});

    const handleCreateTask = (e) => {
        e.preventDefault();
        dispatch({type: "ADD_TASK", payload: {id: new Date().getTime(), name, status}});
        setName('');
        setStatus(false);
        setModal({status: true, message: 'To-do Created!', time: 1});
    }

    const handleDeleteTask = (id) => {
        dispatch({type: "REMOVE_TASK", payload: id})
        setModal({status: true, message: 'To-do Removed!', time: 1});
    }

    const handleTick = (id) => {
        dispatch({type: "TICK_TASK", payload: id})
    }
   
    const handleTimer = (id) => {
        const newTimers = timers.map(timer => {
            if(timer.id ===id) {
                if(timer.seconds <= 1) {
                    timer.seconds = timer.defaultTime;
                    return {...timer};
                }
                timer.final = (new Date().getTime()/1000) + timer.seconds;
                timer.status = !timer.status;
                return {...timer}
            }
            return {...timer, status: false};
        })
        setTimers([...newTimers])
    }
    
    const resetTimer = (id) => {
        const newTimers = timers.map(timer => {
            if(timer.id ===id) {
                timer.seconds = timer.defaultTime;
                timer.status = false;
            }
            return timer;
        })
        setTimers([...newTimers])
    }

    const handleReset = () => {
        const newTimers = timers.map(timer => {
            timer.status = false;
            timer.seconds = timer.defaultTime;
            return timer;
        })
        setTimers([...newTimers])
    }

    useEffect(() => {
        const countdown = setInterval(() => {
            let equal = true;
            const newTimers = timers.map(timer => {
                if(timer.status) {
                    if(timer.seconds >= 1) { 
                        timer.seconds = timer.final - (new Date().getTime()/1000);
                        equal = false;
                        return timer;
                    } else {
                        const alert = new Audio(sound)
                        alert.play();
                    }
                }
                timer.status = false;
                return timer;
            })
            if(equal) {
                clearInterval(countdown)
            } else {
                console.log('alou')
                setTimers([...newTimers])
            }
        }, 100);
        return () => {
            clearInterval(countdown);
        }
    }, [timers])
    
    return (
        <>
        <main>        
        <Switch>            
            <Route exact path="/">
                <Home />
                <MiniTimer timers={timers} />
            </Route>
            <Route exact path="/todo">
                {
                    modal.status && <Modal {...modal} toggle={() => setModal({...modal, status: false})}>
                        {modal.message}
                    </Modal>
                }
                <Form> 
                    <fieldset>
                        <legend>Create to-do</legend>                    
                        <Input label="Name: " type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                        <Input label="Done: " type="checkbox" name="done" id="done" checked={status} onChange={() => setStatus(!status)} />
                        <div className="button">
                            <button type="submit" onClick={(e) => handleCreateTask(e)}>+</button>
                        </div>                
                    </fieldset>
                </Form>
                {todos.tasks.length > 0 && <Todo tasks={todos.tasks} onTick={handleTick} onDelete={handleDeleteTask} />}
                <MiniTimer timers={timers} />
            </Route>
            <Route path="/todo/:id">
                <TodoSingle {...todos} />
            </Route>
            <Route path="/pomodoro">
                <Pomodoro reset={handleReset}>
                    {timers.map(timer => <Timer key={timer.id} {...timer} resetTimer={resetTimer} handleTimer={handleTimer} />)}                     
                </Pomodoro>
            </Route>
            <Route path="*">
                <h1>Error 404</h1>
            </Route>            
        </Switch>
        </main>
        </>
    );
}
 
export default Main;