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
          onClick={function(nextPage) {
            this.setState({
              page:nextPage
            })
          }.bind(this)}
        ></Enterance>;
        break;
      case 'mainLobby':
        pageComponent = <Lobby></Lobby>;
        break;
      case 'blogMain':
        pageComponent = <blogMain onClick={function(pageName) {
          this.setState({
            page:pageName
          });
        }.bind(this)}
        ></blogMain>;
        break;
      case 'worksMain':
        pageComponent = <worksMain onClick={function(pageName) {
          this.setState({
            page:pageName
          });
        }.bind(this)}
        ></worksMain>;
        break;
      case 'linksMain':
        pageComponent = <linksMain onClick={function(pageName) {
          this.setState({
            page:pageName
          });
        }.bind(this)}
        ></linksMain>
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
