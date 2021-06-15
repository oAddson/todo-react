import React, { useState } from 'react';
import './timer.css';

const Timer = ({id, seconds, handleTimer, resetTimer}) => {
    const [button, ] = useState("Start");
    
    return (        
        <div className="timer">
            <span> { seconds/60 < 10 ? "0" + Math.floor(seconds/60) : Math.floor(seconds/60) }:{ seconds%60 < 10 ? "0" + Math.floor(seconds%60) : Math.floor(seconds%60)  }</span>
            <button onClick={() => handleTimer(id)}> {button} </button>
            <button onClick={() => resetTimer(id)}>Reset</button>
        </div>
    );
}

export default Timer;