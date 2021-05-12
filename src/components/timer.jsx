import React, { Component } from 'react';
import './timer.css';

class Timer extends Component {

    render() {
        let {id, seconds, status} = this.props.timer;
        return (
            <div className="timer">
                <h2> { seconds/60 < 10 ? "0" + Math.floor(seconds/60) : Math.floor(seconds/60) }:{ seconds%60 < 10 ? "0" + Math.floor(seconds%60) : Math.floor(seconds%60)  }</h2>
                <button onClick={() => this.props.onClick(id)}> {!status ? "Start" : "Pause"}</button>                
            </div>
        );
    }
}
 
export default Timer;