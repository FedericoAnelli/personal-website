import "./SectionContainer.css";
import { useParams, useNavigate } from "react-router-dom";
import Experience from "../Experience/Experience";
import Certifications from "../Certifications/Certifications";
import Submenu from "../Submenu/Submenu";
import { useState } from "react";
import Projects from "../Projects/Projects";
import Education from "../Education/Education";
import About from "../About/About";

const SectionContainer = () => {
const { section } = useParams();
const navigate = useNavigate();
const [certificates, setCertificates] = useState("Development");

const validateSection = (section) => {
   if (section === "Experience" || section === "Education" || section === "Certifications" || section === "Projects") { 
      return section;
   } else if (section === "About")
   {
      return "Hello!";
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
        {section === "Projects" ? <div className="headerSubMenu"><Submenu section="Projects" /></div> : null}
        </div>
        <div className="contentNavigator">
            {section === "About" ? <About /> : null}
            {section === "Experience" ? <Experience /> : null}
            {section === "Education" ? <Education /> : null}
            {section === "Certifications" ? <Certifications certificates={certificates}/> : null}
            {section === "Projects" ? <Projects /> : null}
        </div>
   </div> 
)
}

export default SectionContainer;