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
            </div>
        )
    }
}

export default ContactMain;