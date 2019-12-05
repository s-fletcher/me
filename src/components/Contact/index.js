import React from 'react';
import './index.scss';
import Button from '../Button'

class Contact extends React.Component {
    
    render () {
        return (
            <div className="Contact">
                <h1>Get in Touch</h1>
                {/* <p>I am currently looking for opportunities to work in an internship position, my inbox is always open. Don’t hesitate to reach out and I’ll try my best to respond.</p> */}
                <div className="description">
                    <p>I am not currently looking for opportunities however, my inbox is always open. Don’t hesitate to reach out and I’ll try my best to respond.</p>
                </div>
                <Button text="Say Hello" />
            </div>
        );
    }
}

export default Contact;