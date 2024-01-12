import React from "react";
import karmere from "../assets/projects/karmere.png"
import cloverdale from "../assets/projects/cloverdale.png"
import shadyLane from "../assets/projects/shadyLane.png"

const Personal = () => {
    return(
        <div className="projects">
            <div className="projectImages">
                <a href="https://www.karmere.com/" target="_blank"><img src={karmere} alt="description" /></a>
                <a href="https://cloverdalechamber.com/experience-cloverdale/" target="_blank"><img src={cloverdale} alt="description" /></a>
                <a href="https://www.shadylanecellars.com/brio/" target="_blank"><img src={shadyLane} alt="description" /></a>
            </div>
        </div>
    );
}

export default Personal;