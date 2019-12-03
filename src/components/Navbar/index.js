import React from 'react';
import './index.scss';
import Button from '../Button';
import Hamburger from './Hamburger';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        function remove(){
            document.getElementsByClassName("right")[0].classList.remove("openMenu");
            document.getElementsByClassName("Hamburger")[0].classList.remove("open");
            document.getElementsByClassName("line")[0].classList.remove("open");
            document.getElementsByClassName("line")[1].classList.remove("open");
            document.getElementsByClassName("line")[2].classList.remove("open");
        }
        window.addEventListener('click', function (e) {
            if (!document.getElementsByClassName('right')[0].contains(e.target)
                && !document.getElementsByClassName('Hamburger')[0].contains(e.target)) {
                    remove();
            }
        });
        window.addEventListener('resize', function(e) {
            if (window.innerWidth >= 768 && document.getElementsByClassName('right')[0].classList.contains("openMenu")) {
                remove();
            }
        });
    }

    handleClick() {
            document.getElementsByClassName("right")[0].classList.toggle("openMenu");
            document.getElementsByClassName("Hamburger")[0].classList.toggle("open");
            document.getElementsByClassName("line")[0].classList.toggle("open");
            document.getElementsByClassName("line")[1].classList.toggle("open");
            document.getElementsByClassName("line")[2].classList.toggle("open");
    }

    render () {
        return (
            <div className="Title">
                <Hamburger onClick={this.handleClick} />
                <nav name="t">
                    <div className="left">
                        <a href="#t" className="sam">Sam Fletcher</a>
                    </div>
                    <div className="right">
                        <a href="#about" className="about">About</a>
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