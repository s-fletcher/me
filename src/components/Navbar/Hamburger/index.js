import React from 'react';
import './index.scss';

class Hamburger extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hamburgerToggle: true };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if(this.state.hamburgerToggle) {
            document.getElementsByClassName("Hamburger")[0].classList.add("open");
            document.getElementsByClassName("line")[0].classList.add("open");
            document.getElementsByClassName("line")[1].classList.add("open");
            document.getElementsByClassName("line")[2].classList.add("open");
        }
        else {
            document.getElementsByClassName("Hamburger")[0].classList.remove("open");
            document.getElementsByClassName("line")[0].classList.remove("open");
            document.getElementsByClassName("line")[1].classList.remove("open");
            document.getElementsByClassName("line")[2].classList.remove("open");
        }
        this.setState(state => ({
            hamburgerToggle: !state.hamburgerToggle
        }));
        this.props.onClick();
    }

    render () {
        return (
            <div onClick={this.handleClick} className="Hamburger">
                <div className="line" />
                <div className="line" />
                <div className="line" />
            </div>
        );
    }
}

export default Hamburger;