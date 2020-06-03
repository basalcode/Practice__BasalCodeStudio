import React, { Component } from 'react';
import './BlogMain.css';
import Introduction from '../../template/Introduction';
import NewPosts from './NewPosts';
import BlogCategory from './BlogCategory';
import BlogPost from './BlogPost';
import BlogPostEditor from './BlogPostEditor';

class BlogMain extends Component {
    constructor(props) {
        super(props);
        this.state={
            blogPage:'blogMain'
        }
    }

    blogMain() {
        return (
            <div id="blog-main" className="basic--page-box basic--top-margin">>
                <Introduction page="BlogMain"></Introduction>
                <NewPosts></NewPosts>
                <main id="blog-main__main" role="main">
                    <h1 id="blog-main__main--header">Categories</h1>
                    <section id="blog-main__category-box">
                        <article class="blog-main__category">
                            <a href="#BlogCategory" onClick={function(event) {
                                event.preventDefault();
                                this.setState('BlogCategory');
                            }.bind(this)}>BlogCategory</a>
                        </article>
                        <article class="blog-main__category">
                            <a href="#BlogPost" onClick={function(event) {
                                event.preventDefault();
                                this.setState('BlogPost');
                            }.bind(this)}>BlogPost</a>
                        </article>
                        <article class="blog-main__category">
                            <a href="#BlogPostEditor" onClick={function(event) {
                                event.preventDefault();
                                this.setState('BlogPostEditor');
                            }.bind(this)}>BlogPostEditor</a>
                        </article>
                    </section>
                </main>
            </div>
        );
    }

    getPage() {
        var pageComponent = null;
        switch(this.state.page) {
            case 'blogMain':
                pageComponent=this.blogMain();
                break;
            case 'blogCategory':
                pageComponent=<BlogCategory></BlogCategory>;
                break;
            case 'blogPost':
                pageComponent=<BlogPost></BlogPost>;
                break;
            case 'blogPostEditor':
                pageComponent=<BlogPostEditor></BlogPostEditor>
                break;
        }
        return pageComponent;
    }

    render() {
        return (
            <div id="blog">
                {this.getPage()}
            </div>
        );
    }
}

export default BlogMain;