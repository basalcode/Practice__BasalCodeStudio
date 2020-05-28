import React, { Component } from 'react';

class LinksMain extends Component {
    render() {
        return (
            <div>
                <section>
                    <img />
                    <p>Introduction of this page</p>
                </section>
                <main role="main">
                    <article>
                        <div>categories</div>
                        <img />
                        <h1>Content 1</h1>
                        <p>This Content is...</p>
                    </article>
                    <article>
                        <div>categories</div>
                        <img />
                        <h1>Content 2</h1>
                        <p>This Content is...</p>
                    </article>
                </main>
            </div>
        );
    }
}

export default LinksMain;