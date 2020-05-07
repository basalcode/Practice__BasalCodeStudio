import React, { Component } from 'react';

class BlogMain extends Component {
  render() {
    return (
        <div>
            <header>
                <a>logo</a>
                <nav>navigation</nav>
            </header>
            <section>
                <img>image</img>
                <p>Introduction of this page</p>
                <article>Slides for added contents</article>
            </section>
            <main>
                <article>
                    A single category information goes here.
                </article>
            </main>
        </div>
    );
  }
}

export default BlogMain;