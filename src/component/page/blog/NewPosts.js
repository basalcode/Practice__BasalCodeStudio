import React, { Component } from 'react';
import './NewPosts.css';

class NewPosts extends Component {
    render() {
        return(
            <div id="new-posts">
                <h1 id="new-posts__header">New Posts</h1>
                <div id="new-posts__content"></div>
            </div>
        );
    }
}

export default NewPosts;