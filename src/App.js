import React, { useState } from 'react';
import {  BrowserRouter as Router   } from "react-router-dom";
import './App.css';
import Header from './components/header';
import Main from './components/main';

const App = () => {
  const [tab, setTab] = useState(1);
  const handleTab = (e, id) => {
    e.preventDefault();
    setTab(id);
  }

  return (
    <Router>
      <div className="App">
        <Header setTab={handleTab}/>
        <Main tab={tab} />
      </div>
    </Router>
  );
}
 
export default App;