import React, { Component } from 'react';
import './Enterance.css';
import '../../../component/template/basic.css'

class Enterance extends Component {

  render() {
    return (
      <div id="enterance" className="basic--max-viewport" 
        onClick={function(event) {
          this.props.onClick('mainLobby');
        }.bind(this)}>
        <div className="enterance__title-square "></div>
        <div className="enterance__title">
          Basal Code Studio
        </div>
        <main role="main" id="enterance__main" className="basic--max-viewport">
          <div className="enterance__background-color"></div>
          <div className="enterance__background-img"></div>
        </main>
      </div>
    );
  }
}

export default Enterance;