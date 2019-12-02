import React from 'react';
import './index.scss';

class Hamburger extends React.Component {

    render () {
        return (
            <div onClick={this.props.onClick} className="Hamburger">
                <div className="line" />
                <div className="line" />
                <div className="line" />
            </div>
        );
    }
}

export default Hamburger;