import React, { Component } from 'react';
import './BlogMain.css';
import Introduction from '../../template/Introduction';
import NewPosts from './NewPosts';

class BlogMain extends Component {
    render() {
        return (
            <div id="blog-main" className="basic--page-box basic--top-margin">
                <Introduction page="BlogMain"></Introduction>
                <NewPosts></NewPosts>
                <main id="blog-main__main" role="main">
                    <h1 id="blog-main__main--header">Categories</h1>
                    <section id="blog-main__category-box">
                        <article class="blog-main__category">
                            article1
                        </article>
                        <article class="blog-main__category">
                            article2
                        </article>
                    </section>
                </main>
            </div>
        );
    }
}

export default BlogMain;