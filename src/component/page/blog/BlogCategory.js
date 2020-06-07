import React, { Component } from 'react';
import './BlogCategory.css';
import Introduction from '../../template/Introduction';

class BlogCategory extends Component {
    render() {
        return (
            <div id="blog-category" className="basic--page-box basic--top-margin">
                <Introduction page="BlogCategory"></Introduction>
                <main role="main">
                    <article>
                        <img />
                        <h1>Content 1</h1>
                        <p>Preview about this content...</p>
                    </article>
                    <article>
                        <img />
                        <h1>Content 2</h1>
                        <p>Preview about this content...</p>
                    </article>
                </main>
            </div>
        );
    }
}

export default BlogCategory;