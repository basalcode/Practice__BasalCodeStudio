import React, { Component } from 'react';
import './WorksMain.css';
import Introduction from '../../template/Introduction';

class WorksMain extends Component {
    render() {
        return (
            <div id="works-main" className="basic--top-margin">
                <Introduction page="WorksMain"></Introduction>
                <main role="main">
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

export default WorksMain;