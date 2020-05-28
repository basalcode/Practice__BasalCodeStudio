import React, { Component } from 'react';
import './Lobby.css';

class Lobby extends Component {
    render() {
        return (
            <div id="lobby">
                <section className="lobby__preface">
                    <p className="lobby__preface--text">
                        I Do Web, So You Don't Have To Worry About It.
                    </p>
                </section>
                <main role="main" id="lobby__main">
                    <article className="lobby__content">
                        <h1>Intro</h1>
                        <p>About Intro...</p>
                    </article>
                    <article className="lobby__content">
                        <h1>Value</h1>
                        <p>About Value</p>
                    </article>
                    <article className="lobby__content">
                        <h1>Contact</h1>
                        <p>About Contact</p>
                    </article>
                </main>
            </div>
        );
    }
}

export default Lobby;


