import React from 'react';
import './index.scss';
import Project from './Project'

class Projects extends React.Component {
    render () {
        return (
            <div className="Projects">
                <h1>Other Noteworthy Projects</h1>
                <div className="container">
                    <Project techStack={["Adobe-Premiere", "Adobe-AE"]} description="An centrialized website for Hacklahoma displaying past events" title="Hacklahoma Hub" type="website" github="https://google.com" external="https://google.com" />
                    <Project techStack={["This", "Is", "Test"]} description="An centrialized website for Hacklahoma displaying past eventsAn centrialized website for Hacklahoma displaying past events" title="Hacklahoma Hub" type="website" github="https://google.com" external="https://google.com" />
                    <Project techStack={["This", "Is", "Test"]} description="An centrialized website for Hacklahoma displaying past events" title="Hacklahoma Hub" type="website" github="https://google.com" external="https://google.com" />
                    <Project techStack={["This", "Is", "Test"]} description="An centrialized website for Hacklahoma displaying past events" title="Hacklahoma Hub" type="website" github="https://google.com" external="https://google.com" />
                    <Project techStack={["This", "Is", "Test"]} description="An centrialized website for Hacklahoma displaying past events" title="Hacklahoma Hub" type="website" github="https://google.com" external="https://google.com" />
                </div>
            </div>
        );
    }
}

export default Projects;