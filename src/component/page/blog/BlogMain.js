import React, { Component } from 'react';
import './BlogMain.css';
import BlogLobby from './BlogLobby';
import BlogCategory from './BlogCategory';
import BlogPost from './BlogPost';
import BlogPostEditor from './BlogPostEditor';


class BlogMain extends Component {
    constructor(props) {
        super(props);
        this.state={
            blogPage:'blogLobby'
        }
    }

    getPage() {
        let pageComponent = null;
        switch(this.state.blogPage) {
            case 'blogLobby':
                pageComponent = <BlogLobby onClick={function(pageName){
                    this.setState({
                        blogPage:pageName
                    });
                    this.props.onPageChange(pageName);
                }.bind(this)}
                ></BlogLobby>;
                break;
            case 'blogCategory':
                pageComponent = <BlogCategory></BlogCategory>;
                break;
            case 'blogPost':
                pageComponent = <BlogPost></BlogPost>;
                break;
            case 'blogPostEditor':
                pageComponent = <BlogPostEditor></BlogPostEditor>
                break;
        }
        return pageComponent;
    }

    render() {
        return this.getPage();
    }
}

export default BlogMain;