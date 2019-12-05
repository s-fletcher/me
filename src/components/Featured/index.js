import React from 'react';
import './index.scss';
import { FaGithub } from 'react-icons/fa'
import { FaExternalLinkAlt } from 'react-icons/fa'

class Featured extends React.Component {

    github() {
        if (this.props.github !== "")
            return(
                <FaGithub className="item" />
            );
    }

    external() {
        if (this.props.external !== "")
            return (
                <FaExternalLinkAlt className="item" />
            );
    }

    render () {
        return (
            <div className={"Featured " + this.props.align}>
                <a href={this.props.external}><div className="thumbnail">
                    <img src={this.props.thumbnail} alt="thumbnail" />
                </div></a>
                <div className="content">
                    <p className="featured">Featured Project</p>
                    <p className="title">{this.props.title}</p>
                    <div className="description">
                        <p>{this.props.description}</p>
                    </div>
                    <div className="tech-stack">
                        {this.props.techStack.map((item, key) =>
                            <p className="item" key={key}>{item}</p>
                        )}
                    </div>
                    <div className="links">
                        <a href={this.props.external}>{this.external()}</a>
                        <a href={this.props.github}>{this.github()}</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Featured;