import React, { Component } from 'react';
import './App.css';
import './component/template/basic.css';
import Enterance from './component/page/main/Enterance';
import Lobby from './component/page/main/Lobby';
import BlogMain from './component/page/blog/BlogMain';
import WorksMain from './component/page/works/WorksMain';
import LinksMain from './component/page/links/LinksMain';
import Header from './component/template/Header';

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
          onClick={function(pageName) {
            this.setState({
              page:pageName
            })
          }.bind(this)}
        ></Enterance>;
        break;
      case 'mainLobby':
        pageComponent = <Lobby
          onClick={function(pageName){
            this.setState({
              page:pageName
            });
          }.bind(this)}
        ></Lobby>;
        break;
      case 'blogMain':
        pageComponent = <BlogMain
          onClick={function(pageName){
            this.setState({
              page:pageName
            });
          }.bind(this)}
        ></BlogMain>;
        break;
      case 'worksMain':
        pageComponent = <WorksMain
          onClick={function(pageName){
            this.setState({
              page:pageName
            });
          }.bind(this)}
        ></WorksMain>;
        break;
      case 'linksMain':
        pageComponent = <LinksMain
          onClick={function(pageName){
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
    var headerComponent = null;
    if (this.state.page != 'mainEnterance') {
      headerComponent = <Header
          onClick={function(pageName) {
              this.setState({
                page:pageName
              });
          }.bind(this)}
      ></Header>
    }
    return (
      <div id="App" className="basic--max-viewport">
        {headerComponent}
        {this.getPage()}
      </div>
    );
  }
}

export default App;
