import React, { Component } from 'react';
import './App.css';
import './component/template/basic.css'
import Enterance from './component/page/main/Enterance';
import Lobby from './component/page/main/Lobby';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      page:'mainEnterance'
    }
  }
  
  getPage() {
    var pageComponent = null;
    switch(this.state.page) {
      case 'mainEnterance':
        pageComponent = <Enterance
          onLoad={function(nextPage) {
            this.setState({
              page:nextPage
            })
            console.log(nextPage);
          }.bind(this)}
        ></Enterance>;
        break;
      case 'mainLobby':
        pageComponent = <Lobby></Lobby>;
        break;
    }
    return pageComponent;
  }

  render() {
    return (
      <div id="App" className="basic--max-viewport">
        {this.getPage()}
      </div>
    );
  }
}

export default App;
