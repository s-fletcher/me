import React from 'react';
import './index.scss';

class Footer extends React.Component {
    render () {
        return (
            <div className="Footer">
                <div className="container">
                    <p className="copyright">© 2019 Sam Fletcher</p>
                    <p className="social"><a href="mailto:sfletchertx@gmail.com">email</a> {"//"} <a href="https://www.github.com/s-fletcher">github</a> {"//"} <a href="https://www.instagram.com/sfletchertx">instagram</a></p>
                </div>
            </div>
        );
    }
}

export default Footer;