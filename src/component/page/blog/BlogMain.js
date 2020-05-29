import React, { Component } from 'react';
import './BlogMain.css';
import Introduction from '../../template/Introduction';

class BlogMain extends Component {
    render() {
        return (
            <div id="blog-main" className="basic--top-margin">
                <Introduction page="BlogMain"></Introduction>
                <main role="main">
                    <article>
                        A single category information goes here.
                    </article>
                </main>
            </div>
        );
    }
}

export default BlogMain;