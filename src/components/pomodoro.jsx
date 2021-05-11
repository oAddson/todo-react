import React, { Component } from 'react';
import Timer from './timer';

class Pomodoro extends Component {
    state = {
        timers : [
            {id: 0, time: 300, status: false},
            {id: 1, time: 600, status: false},
            {id: 2, time: 1500, status: false},
        ]
    }
    count;
    componentDidUpdate() {
        this.count = setTimeout(() => {
            const timers = this.state.timers.map(timer => {                
                timer.time = timer.status ? timer.time - 1 : timer.time;
                return timer;
            })
            console.log('oi')
            this.setState( {timers: timers} )
        }, 1000)
    }

    handleTimer = (id) => { 
        clearTimeout(this.count);    
        const timers = this.state.timers.map((timer) => {
            if (timer.id === id) {
                timer.status = !timer.status;
            } else {
                if (timer.status) {
                    timer.status = !timer.status;                    
                }
            }        
            return timer;
        })
        this.setState( {timers: timers} )
    }
    
    render() { 
        return (
            <div className="pomodoro">
                {this.state.timers.map((timer => {
                    return (
                        <Timer key={timer.id} timer={timer} onClick={this.handleTimer} />
                    );
                }))}
                
            </div>
        );
    }
}
 
export default Pomodoro;