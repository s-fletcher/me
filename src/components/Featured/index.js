import React from 'react';
import './index.scss';
import { FaGithub } from 'react-icons/fa'
import { FaTrophy } from 'react-icons/fa'
import { IoMdOpen } from 'react-icons/io'
import ReactTooltip from 'react-tooltip'

class Featured extends React.Component {

    componentDidMount() {
        // randomly adds delay to awards so they arent synchronized
        var awards = document.getElementsByClassName('award');
        for (var i = 0; i < awards.length; i++) {
            awards[i].style.animationDelay = (-1 * Math.random() * 4) + "s";
        }
    }

    github() {
        if (this.props.github !== "")
            return(
                <FaGithub className="item" />
            );
    }

    external() {
        if (this.props.external !== "")
            return (
                <IoMdOpen className="item" />
            );
    }

    award() {
        if(this.props.award) {
            return(
                <div>
                    <FaTrophy data-tip data-for={this.props.title} className="award" />
                    <ReactTooltip id={this.props.title} type='success' place='right' effect='solid'>
                        <span>{this.props.awardText}</span>
                    </ReactTooltip>
                </div>
            );
        }
    }

    render () {
        return (
            <div className={"Featured " + this.props.align}>
                <div className="thumbnail">
                    <div className="cover">
                        <div className="container">
                            <img src={this.props.thumbnail} alt="thumbnail" />
                            {this.award()}
                        </div>
                    </div>
                </div>
                <div className="content">
                    <p className="featured">Featured Project</p>
                    <p className="title">{this.props.title}</p>
                    <div className="description">
                        <p>{this.props.description}</p>
                    </div>
                    <div className="techStack">
                        {this.props.techStack.map((item, key) => (
                            <p className="item" key={key}>
                                {item}
                            </p>
                        ))}
                    </div>
                    <div className="links">
                        <a href={this.props.github} target="_blank" rel="noopener noreferrer">
                            {this.github()}
                        </a>
                        <a href={this.props.external} target="_blank" rel="noopener noreferrer">
                            {this.external()}
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Featured;