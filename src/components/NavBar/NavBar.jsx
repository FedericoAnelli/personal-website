import "./NavBar.css";
import githubIcon from "../../assets/icons/github.png";
import linkedinIcon from "../../assets/icons/linkedin.png";
import { useNavigate } from "react-router-dom";
import infoIcon from "../../assets/icons/info.png";
import experienceIcon from "../../assets/icons/experience.png";
import educationIcon from "../../assets/icons/education.png";
import certificationsIcon from "../../assets/icons/certifications.png";
import projectsIcon from "../../assets/icons/projects.png";
import mailIcon from "../../assets/icons/mail.png";
import whatsappIcon from "../../assets/icons/whatsapp.png";

const NavBar = () => {
    const navigate = useNavigate();

    const handleClick = (e) =>{
        navigate("/section/" + e);
    }

    return (
        <div className="navbar">
            <ul>
                <li className="profilePicLi"><div className="profilePic"></div></li>
                <li className="myName">Federico Anelli</li>
                <li><button className="buttonNavBar" onClick={(e) => handleClick("About")}><div className="buttonDiv"><img className="buttonIcon" src={infoIcon} alt="about" />About</div></button></li>
                <li><button className="buttonNavBar" onClick={(e) => handleClick("Experience")}><div className="buttonDiv"><img className="buttonIcon" src={experienceIcon} alt="experience" />Experience</div></button></li>
                <li><button className="buttonNavBar" onClick={(e) => handleClick("Education")}><div className="buttonDiv"><img className="buttonIcon" src={educationIcon} alt="education" /> Education </div></button></li>
                <li><button className="buttonNavBar" onClick={(e) => handleClick("Certifications")}><div className="buttonDiv"><img className="buttonIcon" src={certificationsIcon} alt="licenses and certifications" />Certifications</div></button></li>
                <li><button className="buttonNavBar" onClick={(e) => handleClick("Projects")}><div className="buttonDiv"><img className="buttonIcon" src={projectsIcon} alt="projects" />Projects</div></button></li>
            </ul>
            <div className="socialHandlesContainer">
                <a href="https://www.linkedin.com/in/federico-anelli/" target="_blank"><img className="socialHandles" src={linkedinIcon} alt="linkedin" /></a>
                <a href="https://github.com/FedericoAnelli" target="_blank"><img className="socialHandles" src={githubIcon} alt="github" /></a>
                <a href="https://github.com/FedericoAnelli" target="_blank"><img className="socialHandles" src={whatsappIcon} alt="whatsapp" /></a>
                <a href="https://github.com/FedericoAnelli" target="_blank"><img className="socialHandles" src={mailIcon} alt="mail" /></a>
            </div>
        </div>
    );
    }

    export default NavBar;