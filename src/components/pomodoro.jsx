import React from 'react';
import Timer from './timer';
import './pomodoro.css';

const Pomodoro = (props) => {
    return(
        <div className="pomodoro">
            <h2>Pomodoro</h2>
            {props.timers.map((timer => {
                return (
                    <Timer key={timer.id} timer={timer} onClick={props.handleTimer} />
                );
            }))}
            <div className="reset">
                <button onClick={props.reset}> Reset </button>
            </div>
        </div>
    );
}
export default Pomodoro;