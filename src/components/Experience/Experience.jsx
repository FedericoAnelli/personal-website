import "./Experience.css";
import disneyLogo from "../../assets/images/TWDC.webp";

const Experience = () => {

    const calculateExperience = () => {
        const today = new Date();
        const startDate = new Date("2009-12-01");
        const difference = today.getTime() - startDate.getTime();
        const years = Math.floor(difference / (1000 * 3600 * 24 * 365));
        const months = Math.floor((difference % (1000 * 3600 * 24 * 365)) / (1000 * 3600 * 24 * 30));
        return `${years} years and ${months+1} months`;
    }

    return(
        <div className="experienceBody">
            <div className="experienceCard">
                <img className="logoClass" src={disneyLogo} alt="The Walt Disney Company" />
               <div className="textCard">
                <h2>The Walt Disney Company</h2>
                <p>Full time - {calculateExperience()}</p>
                </div>
            </div>
        </div>
    )
}

export default Experience;