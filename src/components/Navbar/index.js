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
        window.addEventListener('resize', function() {
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

    handleScrollTo = (elRef) => {
        // Incase the ref supplied isn't ref.current
        const el = elRef.current ? elRef.current : elRef
        // Scroll the element into view
        el.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        // Close menu
        document.getElementsByClassName("right")[0].classList.remove("openMenu");
        document.getElementsByClassName("Hamburger")[0].classList.remove("open");
        document.getElementsByClassName("line")[0].classList.remove("open");
        document.getElementsByClassName("line")[1].classList.remove("open");
        document.getElementsByClassName("line")[2].classList.remove("open");
    }

    render () {
        return (
            <div className="Title">
                <Hamburger onClick={this.handleClick} />
                <nav>
                    <div className="left">
                        <p onClick={() => window.location.reload(false)} className="sam">Sam Fletcher</p>
                    </div>
                    <div className="right">
                        <p onClick={() => { this.handleScrollTo(this.props.aboutRef) }} className="about">About</p>
                        <p onClick={() => { this.handleScrollTo(this.props.projectsRef) }} className="projects">Projects</p>
                        <p onClick={() => { this.handleScrollTo(this.props.contactRef) }} className="contact">Contact</p>
                        <a href="./resume.pdf" target="_blank" className="resume"><Button>Resume</Button></a>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;