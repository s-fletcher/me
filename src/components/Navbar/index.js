import React from 'react';
import './index.scss';
import Button from '../Button';

class Navbar extends React.Component {
    render () {
        return (
            <div className="Title">
                <nav name="t">
                    <div className="left">
                        <a href="#t" className="sam">Sam Fletcher</a>
                    </div>
                    <div className="right">
                        <a href="#t" className="about">About</a>
                        <a href="#t" className="projects">Projects</a>
                        <a href="#t" className="contact">Contact</a>
                        <a href="#t" className="resume"><Button text="Resume" /></a>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;