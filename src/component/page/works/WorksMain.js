import React, { Component } from 'react';
import './WorksMain.css';
import Introduction from '../../template/Introduction';

class WorksMain extends Component {
    render() {
        return (
            <div id="works-main" className="basic--page-box basic--top-margin">
                <Introduction page="WorksMain"></Introduction>
                <main id="works-main__main" role="main">
                    <article class="">
                        <img />
                        <h1>Content 1</h1>
                        <p>This Content is...</p>
                    </article>
                    <article class="">
                        <span>category</span>
                        <img />
                        <h1>Content 2</h1>
                        <p>This Content is...</p>
                    </article>
                </main>
                <footer id="works-main__footer">
                    <h2>email</h2>
                    <p>basalcode@gmail.com</p>
                    <h2>github</h2>
                    <p>https://github.com/basalcode</p>
                </footer>
            </div>
        );
    }
}

export default WorksMain;