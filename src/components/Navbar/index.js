import React from 'react';
import './index.scss';
import Button from '../Button';
import Hamburger from './Hamburger';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hamburgerToggle: true };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.state.hamburgerToggle) {
            document.getElementsByClassName("right")[0].classList.add("openMenu");
        }
        else {
            document.getElementsByClassName("right")[0].classList.remove("openMenu");
        }
        this.setState(state => ({
            hamburgerToggle: !state.hamburgerToggle
        }));
    }

    render () {
        return (
            <div className="Title">
                <Hamburger toggle={this.state.hamburgerToggle} onClick={this.handleClick} />
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