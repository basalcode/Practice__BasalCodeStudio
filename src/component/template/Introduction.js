import React, {Component} from 'react';
import './Introduction.css';

class Introduction extends Component {
    render() {
        return (
            <section id="introduction">
                <div className="introduction__background-image introduction--content-box">
                    <div className="introduction__title">Title</div>
                </div>
                <div className="introduction__intro-frame introduction--content-box">
                    <p className="introduction__intro-content">
                        Introduction of this page
                    </p>
                </div>
            </section>
        );
    }
}

export default Introduction;
