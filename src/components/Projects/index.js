import React from 'react';
import './index.scss';
import Project from './Project'

class Projects extends React.Component {
    render () {
        return (
            <div className="Projects">
                <Project />
                <Project />
                <Project />
                <Project />
            </div>
        );
    }
}

export default Projects;