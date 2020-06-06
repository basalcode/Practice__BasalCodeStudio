import React, { Component } from 'react';
import './LinksMain.css';
import Introduction from '../../template/Introduction';

class LinksMain extends Component {
    render() {
        return (
            <div id="links-main" className="basic--page-box basic--top-margin">
                <Introduction page="LinksMain"></Introduction>
                <main id="links-main__main" role="main">
                    <h1 id="links-main__main--header">Links</h1>
                    <section id="links-main__content-box">
                        <article  className="links-main__content">
                            <div className="links-main__content-image">categories</div>
                            <div className="links-main__content-description-box">
                                <div className="links-main__content-tag">tag</div>
                                <h1 className="links-main__content-name">Content 1</h1>
                                <p className="links-main__content-description">This Content is...</p>
                            </div>
                        </article>
                        <article  className="links-main__content">
                            <div className="links-main__content-image">categories</div>
                            <div className="links-main__content-description-box">
                                <div className="links-main__content-tag">tag</div>
                                <h1 className="links-main__content-name">Content 2</h1>
                                <p className="links-main__content-description">This Content is...</p>
                            </div>
                        </article>
                    </section>
                </main>
            </div>
        );
    }
}

export default LinksMain;