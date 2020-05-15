import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
        <div>
            <header>
                <a>BasalCodeSutio</a>
                <nav>
                    <a>Blog</a>
                    <a>Works</a>
                    <a>Links</a>
                </nav>
            </header>
            <section>
                <img />
            </section>
            <main>
                <article>
                    <img />
                    <h1>Content 1</h1>
                    <p>This Content is...</p>
                </article>
                <article>
                <span>category</span>
                    <img />
                    <h1>Content 2</h1>
                    <p>This Content is...</p>
                </article>
            </main>
            <footer>
                <h2>email</h2>
                <p>basalcode@gmail.com</p>
                <h2>github</h2>
                <p>https://github.com/basalcode</p>
            </footer>
        </div>
    );
  }
}

export default Main;