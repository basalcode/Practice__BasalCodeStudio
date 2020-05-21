import React, { Component } from 'react';

class Lobby extends Component {
    render() {
        return (
            <div>
                <header className="lobby__header">
                    <a className="lobby__header--logo">BasalCodeSutio</a>
                    <nav className="lobby__header--nav">
                        <li><a>Blog</a></li>
                        <li><a>Works</a></li>
                        <li><a>Links</a></li>
                    </nav>
                </header>
                <section className="lobby__preface">
                    <div className="lobby__preface--image"></div>
                    <p className="lobby__preface--text">I Do Web, So You Don't Have To Worry About It.</p>
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


