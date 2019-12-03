import React from 'react';
import './index.scss';
import { FaTimes } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import { FaExpand } from 'react-icons/fa';

class Console extends React.Component {
    render () {
        return (
            <div id="about" className="Console">
                <div className="container">
                    <div className="title">
                        <div className="red"><FaTimes className="icon" /></div>
                        <div className="yellow"><FaMinus className="icon" /></div>
                        <div className="green"><FaExpand className="icon" /></div>
                        <p>sam-fletcher/about-me.json</p>
                    </div>
                    <div className="content">
                        <p>
                            "sam-fletcher": {"{"}
                        </p>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;"home-town":<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="grey">"Plano, TX",</span>
                        </p>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;"university":<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="grey">"University of Oklahoma",</span>
                        </p>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;"major":<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="grey">"Computer Science",</span>
                        </p>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;"expected-graduation":<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="grey">"May 2022",</span>
                        </p>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;"resume":<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="grey">"<a href="resume.pdf" target="_blank">samfletcher.pdf</a>",</span>
                        </p>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;"email":<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="grey">"<a href="mailto:sfletchertx@gmail.com">sfletchertx@gmail.com</a>",</span>
                        </p>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;"social":<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className="grey">[
                                "<a href="https://www.instagram.com/sfletchertx/" rel="noopener noreferrer" target="_blank">instagram</a>", 
                                "<a href="https://github.com/s-fletcher/" rel="noopener noreferrer" target="_blank">github</a>", 
                                "<a href="https://www.linkedin.com/in/sfletchertx/" rel="noopener noreferrer" target="_blank">linkedin</a>"]
                            </span>
                        </p>
                        <p>
                            {"}"}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Console;