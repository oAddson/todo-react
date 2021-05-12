import React, { Component } from 'react';
import Timer from './timer';
import './pomodoro.css';

class Pomodoro extends Component {
    state = {
        timers : [
            {id: 0, endTime: 0, seconds: 300, defaultTime: 300, status: false},
            {id: 1, endTime: 0, seconds: 900, defaultTime: 900, status: false},
            {id: 2, endTime: 0, seconds: 1500, defaultTime: 1500, status: false},
        ]
    }
    
    componentDidMount() {
        setInterval(() => {
            console.log('interval')
            const timers = this.state.timers.map(timer => {
                if (timer.status) {
                    timer.seconds = (timer.endTime - new Date().getTime())/1000;
                    if(timer.seconds <= 0) {
                        timer.status = false;
                        timer.seconds = 0;
                    }
                }
                return timer
            })
            this.setState( {timers: timers} )
        }, 1000);
    }

    resetTimer = () => {          
        const timers = this.state.timers.map((timer => {
            timer.seconds = timer.defaultTime;
            timer.status = false;
            return timer;
        }))
        this.setState( {timers: timers} )
    }

    handleTimer = (id) => {     
        const timers = this.state.timers.map((timer) => {
            if (timer.id === id) {
                timer.status = !timer.status;
                timer.endTime = new Date().getTime() + (timer.defaultTime * 1000);                 
            } else {
                if (timer.status) {
                    timer.status = false;                                     
                }
                timer.seconds = timer.defaultTime;
            }        
            return timer;
        })
        this.setState( {timers: timers} )
    }
    
    render() { 
        return (
            <div className="pomodoro">
                <h2>Pomodoro</h2>
                {this.state.timers.map((timer => {
                    return (
                        <Timer key={timer.id} timer={timer} onClick={this.handleTimer} />
                    );
                }))}
                <div className="reset"><button onClick={this.resetTimer}> Reset </button></div>
            </div>
        );
    }
}
 
export default Pomodoro;