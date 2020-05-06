import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <a>BasalCodeSutio</a>
          <nav>
            <a>Blog</a>
            <a>Works</a>
            <a>Links</a>
          </nav>
          <p>I Do Web, So You Don't Have To Worry About It.</p>
        </header>
        <section>
          <article>
            <h1>Intro</h1>
            <p>About Intro...</p>
          </article>
          <article>
            <h1>Value</h1>
            <p>About Value</p>
          </article>
          <article>
            <h1>Contact</h1>
            <p>About Contact</p>
          </article>
        </section>
      </div>
    );
  }
}

export default App;
