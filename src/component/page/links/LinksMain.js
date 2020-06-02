import React, { Component } from 'react';
import './LinksMain.css';
import Introduction from '../../template/Introduction';

class LinksMain extends Component {
    render() {
        return (
            <div id="links-main" className="basic--page-box basic--top-margin">
                <Introduction page="LinksMain"></Introduction>
                <main id="links-main__main" role="main">
                    <section id="links-main__content-box">
                        <article  class="links-main__content">
                            <div class="links-main__content-image">categories</div>
                            <div class="links-main__content-description-box">
                                <div class="links-main__content-tag">tag</div>
                                <h1 class="links-main__content-name">Content 1</h1>
                                <p class="links-main__content-description">This Content is...</p>
                            </div>
                        </article>
                        <article  class="links-main__content">
                            <div class="links-main__content-image">categories</div>
                            <div class="links-main__content-description-box">
                                <div class="links-main__content-tag">tag</div>
                                <h1 class="links-main__content-name">Content 2</h1>
                                <p class="links-main__content-description">This Content is...</p>
                            </div>
                        </article>
                    </section>
                </main>
            </div>
        );
    }
}

export default LinksMain;