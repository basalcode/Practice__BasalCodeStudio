import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return(
            <header className="header">
                <a href="#lobby" className="header--logo" onClick={function(event) {
                    event.preventDefault();
                    this.props.onClick('mainLobby');
                }.bind(this)}>BasalCodeSutio</a>
                <nav className="header--nav">
                    <li><a href="#blog" onClick={function(event) {
                        event.preventDefault();
                        this.props.onClick('blogMain');
                    }.bind(this)}>Blog</a></li>
                    <li><a href="#works" onClick={function(event) {
                        event.preventDefault();
                        this.props.onClick('worksMain');
                    }.bind(this)}>Works</a></li>
                    <li><a href="#links" onClick={function(event) {
                        event.preventDefault();
                        this.props.onClick('linksMain');
                    }.bind(this)}>Links</a></li>
                </nav>
            </header>
        );
    }
}

export default Header;