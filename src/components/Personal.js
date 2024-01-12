import React from "react";
import karmere from "../assets/projects/karmere.png"
import cloverdale from "../assets/projects/cloverdale.png"
import shadyLane from "../assets/projects/shadyLane.png"

const Personal = () => {
    return(
        <div className="projects">
            <div className="projectImages">
                <img src={karmere} alt="description" />
                <img src={cloverdale} alt="description" />
                <img src={shadyLane} alt="description" />
            </div>
        </div>
    );
}

export default Personal;