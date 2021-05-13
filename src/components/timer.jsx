import React, { Component } from 'react';
import './timer.css';

class Timer extends Component {

    render() {
        let {id, seconds, status} = this.props.timer;
        return (
            <div className="timer">
                <span> { seconds/60 < 10 ? "0" + Math.floor(seconds/60) : Math.floor(seconds/60) }:{ seconds%60 < 10 ? "0" + Math.floor(seconds%60) : Math.floor(seconds%60)  }</span>
                <button onClick={() => this.props.onClick(id)}> {!status ? "Start" : "Pause"}</button>                
            </div>
        );
    }
}
 
export default Timer;