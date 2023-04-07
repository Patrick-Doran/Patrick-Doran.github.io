import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Hero = () => {
    return(
        <div className="hero">
            <p className="logo">Patrick Doran</p>
            <div>
                <a href="https://github.com/Patrick-Doran" className="linkIcon" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="5x" inverse /></a>
                <a href="https://www.linkedin.com/in/patrick-doran/" className="linkIcon" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="5x" inverse/></a>
            </div>
        </div>
    );
};

export default Hero;