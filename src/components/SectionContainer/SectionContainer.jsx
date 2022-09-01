import "./SectionContainer.css";
import { useParams } from "react-router-dom";

const SectionContainer = () => {
const { section } = useParams();

return (
   <div className="sectionsBody">
        <div className="headerDiv">
        {!section ? <h1>Home</h1> : <h1>{section}</h1>}
        </div>
   </div> 
)
}

export default SectionContainer;