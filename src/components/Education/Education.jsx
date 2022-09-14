import "./Education.css";
import usalLogo from "../../assets/images/usal.png";

const Education = () => {

    return (
        <div className="educationBody">
            <div className="education">

                <img className="usalLogo" src={usalLogo} alt="logo universidad del salvador" />
                <div className="textSection">
                    <h2>Computer Systems Engineering</h2>
                    <h3>Universidad del Salvador</h3>
                    <p>5 Year Bachelor's Degree</p>
                    <p>February 2021</p>
                </div>
            </div>
        </div>
    );
    }

export default Education;