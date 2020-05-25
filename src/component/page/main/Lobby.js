import React, { Component } from 'react';
import './Lobby.css';

class Lobby extends Component {
    render() {
        return (
            <div id="lobby">
                <header className="lobby__header">
                    <a className="lobby__header--logo">BasalCodeSutio</a>
                    <nav className="lobby__header--nav">
                        <li><a href="#blog" onClick={function(event) {
                            event.preventDefault();
                            this.props.onClick('blogMain');
                        }.bind(this)}>Blog</a></li>
                        <li><a href="#works" onClick={function(event) {
                            event.preventDefault();
                            this.props.onClick('worksMain');
                        }.bind(this)}>Works</a></li>
                        <li><a href="#links" onClick={function(event) {
                            event.preventDefault();
                            this.props.onClick('linksMain');
                        }.bind(this)}>Links</a></li>
                    </nav>
                </header>
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


