import React from 'react';
import './miniTimer.css';
const MiniTimer = ({timers}) => {
    return (
        <>
            {timers.map(timer => {
                const {seconds} = timer;
                return (timer.status && <div key={timer.id} className="mini-timer"> 
                    { seconds/60 < 10 ? "0" + Math.floor(seconds/60) : Math.floor(seconds/60) }:{ seconds%60 < 10 ? "0" + Math.floor(seconds%60) : Math.floor(seconds%60)  }
                </div>)                    
            })}            
        </>
    );
}

export default MiniTimer;