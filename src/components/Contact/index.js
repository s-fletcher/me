import React from 'react';
import './index.scss';
import Button from '../Button'

class Contact extends React.Component {
    
    render () {
        return (
            <div ref={this.props.contactRef} className="Contact">
                <h1>Get in Touch</h1>
                {/* <p>I am currently looking for opportunities to work in an internship position, my inbox is always open. Don’t hesitate to reach out and I’ll try my best to respond.</p> */}
                <div className="description">
                    <p>My inbox is always open. Reach out to me for opportunities, project collaborations, or just to say hi! I'll answer your email as soon as possible.</p>
                </div>
                <a href="mailto:sfletchertx@gmail.com"><Button>Say Hello</Button></a>
            </div>
        );
    }
}

export default Contact;