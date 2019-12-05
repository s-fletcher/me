import React from 'react';
import './index.scss';
import { FaGithub } from 'react-icons/fa'
import { FaExternalLinkAlt } from 'react-icons/fa'

class Project extends React.Component {

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

    type() {

    }

    render () {
        return (
            <div className="Project">
                
            </div>
        );
    }
}

export default Project;