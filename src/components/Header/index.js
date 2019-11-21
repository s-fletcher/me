import React from 'react';
import './index.scss';
import Logo from './Logo';

class Header extends React.Component {
    render () {
        return (
            <div className="Header">
                <div className="container">
                    <Logo color="#A2C4E7" />
                </div>
            </div>
        );
    }
}

export default Header;