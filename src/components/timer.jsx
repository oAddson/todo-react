import React, { Component } from 'react';

class Timer extends Component {

    render() {
        let {id, time} = this.props.timer;
        return (
            <div className="timer">
                <h2>{parseInt(time/60)}:{time%60}</h2>
                <button onClick={() => this.props.onClick(id)}> Start</button>
            </div>
        );
    }
}
 
export default Timer;