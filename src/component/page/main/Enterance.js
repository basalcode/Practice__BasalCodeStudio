import React, { Component } from 'react';
import './Enterance.css';
import enterance_img from '../../../img/main/Enterance.jpg'

class Enterance extends Component {
  render() {
    return (
      <div id="enterance">
        <div id="enterance_title" class="veiwportMax">Basal Code Studio</div>
        <main role="main">
          <div id="enterance-background-color"></div>
          <div id="enterance-background-img">
            {/* <img src={enterance_img} alt="Enterance Image" /> */}
          </div>
        </main>
      </div>
    );
  }
}

export default Enterance;