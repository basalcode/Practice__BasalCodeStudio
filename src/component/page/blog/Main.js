import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <div>
                <header>
                    <a>logo</a>
                    <nav>navigation</nav>
                </header>
                <section>
                    <img />image
                    <p>Introduction of this page</p>
                    <article>Slides for added contents</article>
                </section>
                <main role="main">
                    <article>
                        A single category information goes here.
                    </article>
                </main>
            </div>
        );
    }
}

export default Main;