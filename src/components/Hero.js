import React from "react";
import peacock from "../assets/peacock.jpg"

const Hero = () => {
    return(
        <div className="hero">
            <img className="profilePic" src={peacock} alt="Peacock"></img>
        </div>
    );
};

export default Hero;