import React, { Component } from 'react';
import './App.css';
import './component/template/basic.css'
import Enterance from './component/page/main/Enterance';
import Lobby from './component/page/main/Lobby';
import {Main as BlogMain} from './component/page/blog/Main';
import {Main as WorksMain} from './component/page/works/Main';
import {Main as LinksMain} from './component/page/links/Main';

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
        pageComponent = <BlogMain
          onClick={function(pageName) {
            this.setState({
              page:pageName
            });
        }.bind(this)}
        ></BlogMain>;
        break;
      case 'worksMain':
        pageComponent = <WorksMain
          onClick={function(pageName) {
            this.setState({
              page:pageName
            });
        }.bind(this)}
        ></WorksMain>;
        break;
      case 'linksMain':
        pageComponent = <LinksMain
         onClick={function(pageName) {
          this.setState({
            page:pageName
          });
        }.bind(this)}
        ></LinksMain>
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
