import React, { Component } from 'react';
import './LinksMain.css';
import Introduction from '../../template/Introduction';

class LinksMain extends Component {
    render() {
        return (
            <div id="links-main" className="basic--page-box basic--top-margin">
                <Introduction page="LinksMain"></Introduction>
                <main id="links-main__main" role="main">
                    <article  class="">
                        <div>categories</div>
                        <img />
                        <h1>Content 1</h1>
                        <p>This Content is...</p>
                    </article>
                    <article  class="">
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