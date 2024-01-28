import React from "react";
import karmere from "../assets/projects/karmere.png"
import cloverdale from "../assets/projects/cloverdale.png"
import shadyLane from "../assets/projects/shadyLane.png"

const Professional = () => {
    return(
        <div className="projects">
            <h1>Professional Experience</h1>
            <div className="projectImages">
                <a href="https://www.karmere.com/" target="_blank"><img src={karmere} alt="Screenshot of Karmere website home page" />
                    <p>Static</p>
                </a>
                <a href="https://cloverdalechamber.com/experience-cloverdale/" target="_blank"><img src={cloverdale} alt="Screebshot of Cloverdale Chamber website home page" />
                    <p>Wordpress</p>
                </a>
                <a href="https://www.shadylanecellars.com/brio/" target="_blank"><img src={shadyLane} alt="Screenshot of Shady Lane Cellars website home page" />
                    <p>Umbraco</p>
                </a>
            </div>

        </div>
    );
}

export default Professional;