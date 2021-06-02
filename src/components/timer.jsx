import React, { useState } from 'react';
import './timer.css';

const Timer = props => {
    const {id, seconds} = props.timer;
    const [button, setButton] = useState("Start");
    const handleClick = () => {
        props.onClick(id)
        if(button === "Start") {
            setButton("Pause")
        } else {
            setButton("Start")
        }
    }
    
    return (        
        <div className="timer">
            <span> { seconds/60 < 10 ? "0" + Math.floor(seconds/60) : Math.floor(seconds/60) }:{ seconds%60 < 10 ? "0" + Math.floor(seconds%60) : Math.floor(seconds%60)  }</span>
            <button onClick={handleClick}> {seconds <= 0 ? "Reset" : button }</button>
        </div>
    );
}

export default Timer;