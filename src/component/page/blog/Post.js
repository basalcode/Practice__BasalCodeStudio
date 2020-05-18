import React, { Component } from 'react';

class Post extends Component {
    render() {
        return (
            <div>
                <header>
                    <a>logo</a>
                    <nav>navigation</nav>
                </header>
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

export default Post;
