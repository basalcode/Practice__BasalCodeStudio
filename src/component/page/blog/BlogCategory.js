import React, { Component } from 'react';

class BlogCategory extends Component {
    render() {
        return (
            <div>
                <header>
                    <a>logo</a>
                    <nav>navigation</nav>
                </header>
                <section>
                    <p>Introduction of this page</p>
                </section>
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