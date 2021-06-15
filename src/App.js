import React, { Component } from 'react';
import {  BrowserRouter as Router   } from "react-router-dom";
import './App.css';
import Header from './components/header';
import Main from './components/main';

class App extends Component {
  state = {
    tab: 1
  }

  handleTab = (e, id) => {    
    e.preventDefault();
    this.setState({tab : id})
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header setTab={this.handleTab}/>
          <Main tab={this.state.tab} />
        </div>
      </Router>
    );
  }
}
 
export default App;