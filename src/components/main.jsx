import React, { useEffect, useReducer, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
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

const initialInput = {name: '', status: false, description: '', category: ''};

const initialTimers = [
    {id: 0, status: false, defaultTime: 300, final: 0, seconds: 300},
    {id: 1, status: false, defaultTime: 600, final: 0, seconds: 600},
    {id: 2, status: false, defaultTime: 1500, final: 0, seconds: 1500}
]

const initialtodos = {tasks: JSON.parse(localStorage.getItem('@todo-list/todos')) || []};

const Main = () => {
    const [input, setInput] = useState(initialInput);
    const [todos, dispatch] = useReducer(reducer, initialtodos);
    const [timers, setTimers] = useState(initialTimers);
    const [details, setDetails] = useState(false)
    const [modal, setModal] = useState({status: false, message: ''});

    const handleCreateTask = (e) => {
        e.preventDefault();
        dispatch({type: "ADD_TASK", payload: {id: new Date().getTime(), ...input}});
        setInput(initialInput);
        setDetails(false)
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
                        <Input label="Name: " type="text" name="name" id="name" value={input.name} onChange={(e) => setInput({...input, name: e.target.value})} />
                        <Input label="Done: " type="checkbox" name="done" id="done" checked={input.status} onChange={() => setInput({...input, status: !input.status})} />
                        <Input label="More: " type="checkbox" name="details" id="details" checked={details} onChange={() => setDetails(!details)} />
                        <div className="button">
                            <button type="submit" onClick={(e) => handleCreateTask(e)}>+</button>
                        </div>
                        {
                            details && (
                                <div>
                                    <Input label="Description: " type="description" name="description" id="description" value={input.description} onChange={(e) => setInput({...input, description: e.target.value})} />
                                    <Input label="Category: " type="category" name="category" id="category" value={input.category} onChange={(e) => setInput({...input, category: e.target.value})} />
                                </div>
                            )
                        }           
                    </fieldset>
                </Form>
                {todos.tasks.length > 0 && <Todo tasks={todos.tasks} onTick={handleTick} onDelete={handleDeleteTask} />}
            </Route>
            <Route path="/todo/:id">
                <TodoSingle handleTick={handleTick} {...todos} />
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
        <MiniTimer timers={timers} />
        </main>
        </>
    );
}
 
export default Main;