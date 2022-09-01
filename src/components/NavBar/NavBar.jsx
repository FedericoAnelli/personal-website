import "./NavBar.css";
import React from "react";
import githubIcon from "../../assets/icons/github.png";
import linkedinIcon from "../../assets/icons/linkedin.png";

const NavBar = () => {
    return (
        <div className="navbar">
            <ul>
                <li className="profilePicLi"><div className="profilePic"></div></li>
                <li className="myName">Federico Anelli</li>
                <li><button>BUTTON 1</button></li>
                <li><button>BUTTON 2</button></li>
                <li><button>BUTTON 3</button></li>
            </ul>
            <div className="socialHandlesContainer">
                <img className="socialHandles" src={linkedinIcon} alt="linkedin button" />
                <img className="socialHandles" src={githubIcon} alt="github button" />
            </div>
        </div>
    );
    }

    export default NavBar;