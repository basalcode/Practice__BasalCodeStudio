import React, { Component } from 'react';
import './WorksMain.css';
import Introduction from '../../template/Introduction';

class WorksMain extends Component {
    render() {
        return (
            <div id="works-main" className="basic--page-box basic--top-margin">
                <Introduction page="WorksMain"></Introduction>
                <main id="works-main__main" role="main">
                    <h1 id="works-main__main--header">Works</h1>
                    <section id="works-main__content-box">    
                        <article class="works-main__content">
                            <img />
                            <h1>Content 1</h1>
                            <p>This Content is...</p>
                        </article>
                        <article class="works-main__content">
                            <img />
                            <h1>Content 2</h1>
                            <p>This Content is...</p>
                        </article>
                    </section>
                </main>
            </div>
        );
    }
}

export default WorksMain;