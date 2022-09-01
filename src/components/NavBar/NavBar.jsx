import "./NavBar.css";
import githubIcon from "../../assets/icons/github.png";
import linkedinIcon from "../../assets/icons/linkedin.png";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        navigate("/section/" + e.target.innerText);
    }

    return (
        <div className="navbar">
            <ul>
                <li className="profilePicLi"><div className="profilePic"></div></li>
                <li className="myName">Federico Anelli</li>
                <li><button onClick={handleClick}>About</button></li>
                <li><button onClick={handleClick}>Experience</button></li>
                <li><button onClick={handleClick}>Education</button></li>
                <li><button onClick={handleClick}>Licenses & Certifications</button></li>
                <li><button onClick={handleClick}>Projects</button></li>
            </ul>
            <div className="socialHandlesContainer">
                <img className="socialHandles" src={linkedinIcon} alt="linkedin button" />
                <img className="socialHandles" src={githubIcon} alt="github button" />
            </div>
        </div>
    );
    }

    export default NavBar;