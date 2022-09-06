import "./SectionContainer.css";
import { useParams, useNavigate } from "react-router-dom";
import Experience from "../Experience/Experience";
import Certifications from "../Certifications/Certifications";
import Submenu from "../Submenu/Submenu";
import { useState } from "react";

const SectionContainer = () => {
const { section } = useParams();
const navigate = useNavigate();
const [certificates, setCertificates] = useState("Development");

const validateSection = (section) => {
   if (section === "About" || section === "Experience" || section === "Education" || section === "Certifications" || section === "Projects") { 
      return section;
   }
   else{
      navigate("*");
   }
}

const handleClick = (e) => {
   setCertificates(e.target.innerText);
}


return (
   <div className="sectionsBody">
        <div className="headerDiv">
            <div className="headerTitle">
               {!section ? <h1>Home</h1> : <h1>{validateSection(section)}</h1>}
         </div>
        {section === "Certifications" ? <div className="headerSubMenu"><Submenu handleClick={handleClick} certificates={certificates} section="Certifications" /></div> : null}
        {section === "Projects" ? <div className="headerSubMenu"><Submenu handleClick={handleClick} certificates={certificates} section="Projects" /></div> : null}
        </div>
        <div className="contentNavigator">
            {section === "About" ? <h1>About</h1> : null}
            {section === "Experience" ? <Experience /> : null}
            {section === "Education" ? <h1>Education</h1> : null}
            {section === "Certifications" ? <Certifications certificates={certificates}/> : null}
            {section === "Projects" ? <h1>Projects</h1> : null}
        </div>
   </div> 
)
}

export default SectionContainer;