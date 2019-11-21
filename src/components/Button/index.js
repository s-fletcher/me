import React from 'react';
import './index.scss';

class Button extends React.Component {
    render () {
        return (
            <div className="Button">
                {this.props.text}
            </div>
        );
    }
}

export default Button;