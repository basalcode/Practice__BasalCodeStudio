import React, { Component } from 'react';

class BlogMain extends Component {
    render() {
        return (
            <div>
                <section>
                    <img />image
                    <p>Introduction of this page</p>
                    <article>Slides for added contents</article>
                </section>
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