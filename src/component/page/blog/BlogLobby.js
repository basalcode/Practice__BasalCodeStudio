import React, { Component } from 'react';
import './BlogLobby.css';
import Introduction from '../../template/Introduction';
import NewPosts from './NewPosts';

class BlogLobby extends Component {
    render() {
        return(
            <div id="blog-lobby" className="basic--page-box basic--top-margin">
                <Introduction page="BlogLobby"></Introduction>
                <NewPosts></NewPosts>
                <main id="blog-lobby__main" role="main">
                    <h1 id="blog-lobby__main--header">Categories</h1>
                    <section id="blog-lobby__category-box">
                        <article className="blog-lobby__category">
                            <a href="#BlogCategory" onClick={function(event) {
                                event.preventDefault();
                                this.props.onClick('blogCategory');
                            }.bind(this)}>BlogCategory</a>
                        </article>
                        <article className="blog-lobby__category">
                            <a href="#BlogPost" onClick={function(event) {
                                event.preventDefault();
                                this.props.onClick('blogPost');
                            }.bind(this)}>BlogPost</a>
                        </article>
                        <article className="blog-lobby__category">
                            <a href="#BlogPostEditor" onClick={function(event) {
                                event.preventDefault();
                                this.props.onClick('blogPostEditor');
                            }.bind(this)}>BlogPostEditor</a>
                        </article>
                    </section>
                </main>
            </div>
        );
    }
}

export default BlogLobby;