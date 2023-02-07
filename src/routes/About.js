import React from "react";
import "./About.css";

function About(props){
    console.log(props);
    return (
        <div className="about__container">
    <span>
        Web frontend study with React!
    </span>
    <span>-Chanho Lee, 2023</span>
    </div>
    );
}

export default About;