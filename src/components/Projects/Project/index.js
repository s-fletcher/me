import React from 'react';
import './index.scss';
import { FaGithub } from 'react-icons/fa'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { IoIosGlobe } from 'react-icons/io'

class Project extends React.Component {

    github() {
        if (this.props.github !== "")
            return(
                <a href={this.props.github}><FaGithub className="item" /></a>
            );
    }

    external() {
        if (this.props.external !== "")
            return (
                <a href={this.props.external}><FaExternalLinkAlt className="item" /></a>
            );
    }

    type() {
        if (this.props.type === "website")
            return (
                <IoIosGlobe className="type" />
            );
    }

    render () {
        return (
            <div className="Project">
                <div className="left">
                    <div className="container">
                        {this.type()}
                    </div>
                </div>
                <div className="right">
                    <div className="container">
                        {this.github()}{this.external()}
                    </div>
                </div>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                <div className="techStack">
                    {this.props.techStack.map((item, key) =>
                        <p className="item" key={key}>{item}</p>
                    )}
                </div>
            </div>
        );
    }
}

export default Project;