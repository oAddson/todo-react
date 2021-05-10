import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Main from './components/main';

class App extends Component {
  state = {  }
  render() { 
    return (
      <React.Fragment>
        <Header/>
        <Main />
      </React.Fragment>
    );
  }
}
 
export default App;