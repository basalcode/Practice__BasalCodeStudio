import React, {Component} from 'react';
import './Introduction.css';

class Introduction extends Component {
    render() {
        return (
            <section id="introduction">
                <div class="section__background-image">
                    <div class="section__title">Title</div>
                </div>
                <p class="section__intro">Introduction of this page</p>
            </section>
        );
    }
}

export default Introduction;
