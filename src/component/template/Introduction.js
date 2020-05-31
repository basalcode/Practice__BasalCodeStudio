import React, {Component} from 'react';
import './Introduction.css';

class Introduction extends Component {
    render() {
        return (
            <section id="introduction">
                <div class="introduction__background-image introduction--content-box">
                    <div class="introduction__title">Title</div>
                </div>
                <div class="introduction__intro-frame introduction--content-box">
                    <p class="introduction__intro-content">
                        Introduction of this page
                    </p>
                </div>
            </section>
        );
    }
}

export default Introduction;
