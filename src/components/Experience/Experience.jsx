import "./Experience.css";
import disneyLogo from "../../assets/images/TWDC.webp";
import arrowDown from "../../assets/icons/arrowDown.png";

const Experience = () => {

    const calculateExperience = () => {
        const today = new Date();
        const startDate = new Date("2009-12-01");
        const difference = today.getTime() - startDate.getTime();
        const years = Math.floor(difference / (1000 * 3600 * 24 * 365));
        const months = Math.floor((difference % (1000 * 3600 * 24 * 365)) / (1000 * 3600 * 24 * 30));
        return `${years} years and ${months+1} months`;
    }

    const calculateExperienceInJob = () => {
        const today = new Date();
        const startDate = new Date("2021-07-01");
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
            <div className="experienceCardJob">
                <div className="experienceCardJobText">
                <h2>Regional Head of Digital Product & Technology</h2>
                <p>Jul 2021 - Present | {calculateExperienceInJob()}</p>
                <p>Buenos Aires, Argentina</p>
                </div>
                <div className="experienceCardJobArrow">
                <img className="arrowDown" src={arrowDown} alt="arrow down" />
                </div>
            </div>
            <div className="experienceCardJob">
                <div className="experienceCardJobText">
                <h2>Jr. Manager, Digital</h2>
                <p>Jan 2020 - Jul 2021 | 1 year and 7 months</p>
                <p>Buenos Aires, Argentina</p>
                </div>
                <div className="experienceCardJobArrow">
                <img className="arrowDown" src={arrowDown} alt="arrow down" />
                </div>
            </div>
            <div className="experienceCardJob">
                <div className="experienceCardJobText">
                <h2>Project Management Supervisor</h2>
                <p>Oct 2017 - Jan 2020 | 2 years and 4 months</p>
                <p>Buenos Aires, Argentina</p>
                </div>
                <div className="experienceCardJobArrow">
                <img className="arrowDown" src={arrowDown} alt="arrow down" />
                </div>
            </div>
            <div className="experienceCardJob">
                <div className="experienceCardJobText">
                <h2>Project Management Supervisor</h2>
                <p>May 2015 - Oct 2017 | 2 years and 6 months</p>
                <p>Buenos Aires, Argentina</p>
                </div>
                <div className="experienceCardJobArrow">
                <img className="arrowDown" src={arrowDown} alt="arrow down" />
                </div>
            </div>
            <div className="experienceCardJob">
                <div className="experienceCardJobText">
                <h2>Team Lead</h2>
                <p>May 2012 - May 2015 | 3 years and 1 month</p>
                <p>Buenos Aires, Argentina</p>
                </div>
                <div className="experienceCardJobArrow">
                <img className="arrowDown" src={arrowDown} alt="arrow down" />
                </div>
            </div>
            <div className="experienceCardJob">
                <div className="experienceCardJobText">
                <h2>Player Support Representative</h2>
                <p>Dec 2009 - May 2012 | 2 years and 6 months</p>
                <p>Buenos Aires, Argentina</p>
                </div>
                <div className="experienceCardJobArrow">
                <img className="arrowDown" src={arrowDown} alt="arrow down" />
                </div>
            </div>
        </div>
    )
}

export default Experience;