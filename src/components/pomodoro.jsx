import React from 'react';
import './pomodoro.css';

const Pomodoro = ({children, reset}) => {
    return(
        <div className="pomodoro">
            <h2>Pomodoro</h2>
            {children}
            <div className="reset">
                <button onClick={reset}> Reset </button>
            </div>
        </div>
    );
}
export default Pomodoro;