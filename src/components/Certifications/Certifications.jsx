import AcquiredCertificates from "../AcquiredCertificates/AcquiredCertificates";
import "./Certifications.css";
import { useState } from "react";

const Certifications = () => {
    const [certificates, setCertificates] = useState([]);

    const handleClick = (e) => {
        setCertificates(e.target.innerText);
    }

    return (
        <div className="certifications">
            <div className="buttonSection">
            <button onClick={(e) => handleClick(e)}>Development</button>
            <button onClick={(e) => handleClick(e)}>Product</button>
            <button onClick={(e) => handleClick(e)}>Languages</button>
            <button onClick={(e) => handleClick(e)}>Soft Skills</button>
            </div>
            <div className="certificationsContainer">
                    <AcquiredCertificates field={certificates} />
            </div>
        </div>
    )
}

export default Certifications;