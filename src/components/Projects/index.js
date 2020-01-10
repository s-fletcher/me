import React from 'react';
import './index.scss';
import Project from './Project';
import projects from '../../projects';

class Projects extends React.Component {
    render () {
        return (
            <div className="Projects">
                <h1>Other Noteworthy Projects</h1>
                <div className="container">
                    {Object.keys(projects).map((key) =>
                        <Project
                            featured={projects[key].featured}
                            title={key}
                            key={key}
                            description={projects[key].description}
                            techStack={projects[key].techStack}
                            github={projects[key].links.github}
                            type={projects[key].type}
                            award={projects[key].award}
                            awardText={projects[key].awardText}
                            external={projects[key].links.external} />
                    )}
                </div>
            </div>
        );
    }
}

export default Projects;