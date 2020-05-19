import React, { Component } from 'react';
import './App.css';
import './component/page/main/Enterance.css';
import './component/template/basic.css'
import Enterance from './component/page/main/Enterance';

class App extends Component {
  render() {
    return (
      <div className="App basic--max-viewport">
        <Enterance></Enterance>
      </div>
    );
  }
}

export default App;
