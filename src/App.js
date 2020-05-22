import React, { Component } from 'react';
import './App.css';
import './component/template/basic.css'
//import './component/page/main/Enterance.css';
//import './component/page/main/Lobby.css';
//import Enterance from './component/page/main/Enterance';
import Lobby from './component/page/main/Lobby';

class App extends Component {
  render() {
    return (
      <div id="App" className="basic--max-viewport">
        {/* <Enterance></Enterance> */}
        <Lobby></Lobby>
      </div>
    );
  }
}

export default App;
