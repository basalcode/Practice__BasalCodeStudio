import React, { Component } from 'react';
import Header from '../../template/Header';

class ContactMain extends Component {
    render() {
        return (
            <div>
                <Header
                    onClick={function(pageName) {
                        this.props.onClick(pageName);
                    }.bind(this)}
                ></Header>
                <main role="main">
                    <section>
                        <form>

                        </form>
                    </section>
                </main>
                <footer id="contact-main__footer">
                    <h2>email</h2>
                    <p>basalcode@gmail.com</p>
                    <h2>github</h2>
                    <p>https://github.com/basalcode</p>
                </footer>
            </div>
        )
    }
}

export default ContactMain;