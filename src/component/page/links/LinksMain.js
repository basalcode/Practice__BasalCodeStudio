import React, { Component } from 'react';
import './LinksMain.css';
import Introduction from '../../template/Introduction';

class LinksMain extends Component {
    render() {
        return (
            <div id="links-main" className="basic--top-margin">
                <Introduction page="LinksMain"></Introduction>
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