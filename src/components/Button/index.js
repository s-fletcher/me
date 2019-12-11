import React from 'react';
import './index.scss';

class Button extends React.Component {
    render () {
        return (
            <div onClick={this.props.onClickFunction} className={"Button " + this.props.color}>
                {this.props.children}
            </div>
        );
    }
}

export default Button;