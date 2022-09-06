import "./SectionContainer.css";
import { useParams, useNavigate } from "react-router-dom";
import Experience from "../Experience/Experience";
import Certifications from "../Certifications/Certifications";

const SectionContainer = () => {
const { section } = useParams();
const navigate = useNavigate();

const validateSection = (section) => {
   if (section === "About" || section === "Experience" || section === "Education" || section === "Certifications" || section === "Projects") {
       return section;
   }
   else{
      navigate("*");
   }
}


return (
   <div className="sectionsBody">
        <div className="headerDiv">
        {!section ? <h1>Home</h1> : <h1>{validateSection(section)}</h1>}
        </div>
        <div className="contentNavigator">
            {section === "About" ? <h1>About</h1> : null}
            {section === "Experience" ? <Experience /> : null}
            {section === "Education" ? <h1>Education</h1> : null}
            {section === "Certifications" ? <Certifications /> : null}
            {section === "Projects" ? <h1>Projects</h1> : null}
        </div>
   </div> 
)
}

export default SectionContainer;