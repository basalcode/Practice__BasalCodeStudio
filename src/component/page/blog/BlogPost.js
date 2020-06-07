import React, { Component } from 'react';
import './BlogPost.css';

class BlogPost extends Component {
    render() {
        return (
            <div id="blog-post" className="basic--page-box basic--top-margin">
                <main role="main">
                    <article>
                        <img />
                        <h1>Content 1</h1>
                        <p>Preview about this content...</p>
                    </article>
                    <article>
                        <img />
                        <h1>Content 1</h1>
                        <p>Preview about this content...</p>
                    </article>
                </main>
            </div>
        );
    }
}

export default BlogPost;
