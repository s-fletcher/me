import React from "react";
import "./index.scss";
import { FaGithub } from "react-icons/fa";
import { IoMdOpen } from "react-icons/io";
import { IoIosGlobe } from "react-icons/io";
import { IoIosVideocam } from "react-icons/io";
import { FaCogs } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import ReactTooltip from "react-tooltip";

class Project extends React.Component {
    github() {
        if (this.props.github !== "")
            return (
                <a href={this.props.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="item" />
                </a>
            );
    }

    external() {
        if (this.props.external !== "")
            return (
                <a href={this.props.external} target="_blank" rel="noopener noreferrer">
                    <IoMdOpen className="item" />
                </a>
            );
    }

    type() {
        if (this.props.type === "website") return <IoIosGlobe className="type" />;
        else if (this.props.type === "film") return <IoIosVideocam className="type" />;
        else if (this.props.type === "hardware") return <FaCogs className="type" />;
    }

    award() {
        if (this.props.award) {
            return (
                <div>
                    <FaTrophy data-tip data-for={this.props.title} className="award" />
                    <ReactTooltip id={this.props.title} type="success" place="right" effect="solid">
                        <span>{this.props.awardText}</span>
                    </ReactTooltip>
                </div>
            );
        }
    }

    render() {
        if (!this.props.featured)
            return (
                <div className="Project">
                    {this.award()}
                    <div className="left">
                        <div className="container">{this.type()}</div>
                    </div>
                    <div className="right">
                        <div className="container">
                            {this.github()}
                            {this.external()}
                        </div>
                    </div>
                    <a href={this.props.external} target="_blank" rel="noopener noreferrer">
                        <h1>{this.props.title}</h1>
                    </a>
                    <p>{this.props.description}</p>
                    <div className="techStack">
                        {this.props.techStack.map((item, key) => (
                            <p className="item" key={key}>
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
            );
        else {
            return null;
        }
    }
}

export default Project;
