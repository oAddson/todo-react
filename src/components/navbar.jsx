import React, {Component} from 'react';
import './navbar.css'

class NavBar extends Component {
    state = { tab: [
        {id: 1, label: 'Home', url: './home'},
        {id: 2, label: 'To-do', url: './todo'},
        {id: 3, label: 'Pomodoro', url: './pomodoro'},
    ]  }
    render() {
        return (
            <nav className="navbar">
                <ul>
                    {this.state.tab.map(item => <li key={item.id} ><a href={item.url}> {item.label}</a></li>)}
                </ul>
            </nav>
        );
    }
}
 
export default NavBar;